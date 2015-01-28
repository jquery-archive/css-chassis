module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-contrib-jshint" );
grunt.loadNpmTasks( "grunt-contrib-connect" );
grunt.loadNpmTasks( "grunt-selenium-server" );
grunt.loadNpmTasks( "grunt-html" );
grunt.loadNpmTasks( "grunt-jscs" );

var target,
	template = require( "ejs-template" ),
	urlParser = require( "url" ),
	componentGenerator = require( "./performance/component.js" ),
	seleniumChildProcesses = {};

// This saves the process so we can attempt to kill it later in the case of a failure
grunt.event.on( "selenium.start", function( target, process ) {
	grunt.log.ok( "Saw process for target: " +  target );
	seleniumChildProcesses[ target ] = process;
});

// This tryys to gracefully handle failures and kill the selenium server but its not 100%
// if this does is not successfull the task will not run again until this has been killed
grunt.util.hooker.hook( grunt.fail, function() {

	// Clean up selenium if we left it running after a failure.
	grunt.log.writeln( "Attempting to clean up running selenium server." );
	for ( target in seleniumChildProcesses ) {
		grunt.log.ok( "Killing selenium target: " + target );
		try {
			seleniumChildProcesses[ target ].kill( "SIGTERM" );
		}
		catch ( e ) {

			// This is only if the kill command fails
			grunt.log.warn( "Unable to stop selenium target: " + target );
		}
	}
});

grunt.initConfig({
	jshint: {
		files: [ "*.js", "performance/*.js", "performance/frameworks/*.js" ],
		options: {
			jshintrc: ".jshintrc"
		}
	},
	jscs: {
		all: [ "*.js", "performance/*.js", "performance/frameworks/*.js" ]
	},
	perfjankie: {
		options: {
			suite: "perfSlides - Performance Analysis"
		},
		"comparison": {
			options: {
				repeat: 2,
				selenium: "http://localhost:4444/wd/hub",
				browsers: "chrome",
				couch: {
					server: "http://localhost:5984",
					database: "css-performance",
					updateSite: true
				},
				urls: [
					"http://localhost:4200/framework/foundation/component/button/count/1000/" +
						"foundation:button",
					"http://localhost:4200/framework/jquery-mobile/component/button/count/1000/" +
						"jquery-mobile:button",
					"http://localhost:4200/framework/jquery-ui/component/button/count/1000/" +
						"jquery-ui:button",
					"http://localhost:4200/framework/bootstrap/component/button/count/1000/" +
						"bootstrap:button"
				]
			}
		}
	},
	connect: {
		options: {
			port: 4200,
			base: ".",
			middleware: [
				template.middleware({ basedir: __dirname }),
				function( req, res ) {
					var data, i,
						url = urlParser.parse( req.url, true ),
						query = {},
						parts = url.pathname.split( "/" ),
						file = req.url.replace( /^\//, "" ).split( "?" )[ 0 ];

					for ( i = 1; i < parts.length; i += 2 ) {
						query[ parts[ i ] ] = parts[ i + 1 ];
					}
					if ( file.split( "." ).length <= 1 ) {
						data = componentGenerator.generate(
							query.framework,
							query.component,
							query.count
						);
						file = "performance/component.html";
					}
					res.endTemplate( file, data );
				}
			]
		},
		perf: {},
		dev: {
			options: {
				keepalive: true
			}
		}
	},
	"start-selenium-server": {
		dev: {
			options: {
				downloadUrl: "https://selenium-release.storage.googleapis.com/2.40/" +
					"selenium-server-standalone-2.40.0.jar",
				downloadLocation: "external/selenium",
				serverOptions: {
					"Dwebdriver.chrome.driver=node_modules/chromedriver/bin/chromedriver": ""
				},
				systemProperties: {}
			}
		}
	}
});
grunt.loadNpmTasks( "perfjankie" );
grunt.registerTask( "update-authors", function() {
	var getAuthors = require( "grunt-git-authors" ),
		done = this.async();

	getAuthors( {}, function( error, authors ) {
		if ( error ) {
			grunt.log.error( error );
			return done( error );
		}

		grunt.file.write( "AUTHORS.txt",
			"Authors ordered by first contribution\n\n" +
			authors.join( "\n" ) + "\n" );
		done();
	});
});

grunt.registerTask( "default", [ "jshint", "jscs" ] );
grunt.registerTask( "perf", [ "start-selenium-server", "connect:perf", "perfjankie" ] );
};
