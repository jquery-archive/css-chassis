module.exports = function( grunt ) {
require( "load-grunt-tasks" )( grunt );

var config = {
		autoprefixer: {
			dist: {
				options: {
					map: true,
					browsers: [
						"> 1%",
						"last 2 versions",
						"safari >= 5.1",
						"ios >= 6.1",
						"android 2.3",
						"android >= 4",
						"ie >= 8"
					]
				},
				src: "css/*.css"
			}
		},
		cssmin: {
			options: {
				report: "gzip",
				sourceMap: true
			},
			target: {
				files: {
					"css/chassis.min.css": "css/style.min.css"
				}
			}
		},
		csslint: {
			src: [ "css/*.css" ]
		},
		jscs: {
			all: [ "*.js", "performance/*.js", "performance/frameworks/*.js" ]
		},
		jshint: {
			files: [ "*.js", "performance/*.js", "performance/frameworks/*.js" ],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		sass: {
			min: {
				options: {
					sourceMap: true,
					outFile: "/css/chassis.css",
					outputStyle: "compressed"
				},
				files: [ {
					expand: true,
					cwd: "scss",
					src: [ "*.scss" ],
					dest: "dist/css/",
					ext: ".min.css"
				} ]
			},
			dist: {
				options: {
					sourceMap: false,
					outFile: "/css/chassis.css",

					// This actually does nested until libsass updates to support expanded
					outputStyle: "expanded"
				},
				files: [ {
					expand: true,
					cwd: "scss",
					src: [ "*.scss" ],
					dest: "dist/css/",
					ext: ".css"
				} ]
			}
		},
		// Minifies SVGs
		svgmin: {
			options: {
				plugins: [
					{
						removeViewBox: false
					}, {
						removeUselessStrokeAndFill: false
					}
				]
			},
			dist: {
				files: [ {
					expand: true,
					cwd: "icons/svg-source",
					src: [ "*.svg" ],
					dest: "icons/svg-min/",
					ext: ".svg"
				} ]
			}
		},

		// Combines SVGs into single file
		svgstore: {
			defaults: {
				options: {

					// This will prefix each ID
					prefix: "icon-",

					// Adds attributes to the resulting SVG
					svg: {
						viewBox: "0 0 24 24",
						xmlns: "http://www.w3.org/2000/svg"
					},
					cleanup: [ "style", "fill", "id" ]
				},
				files: {
					"icons/icons.svg": [ "icons/svg-min/*.svg" ]
				}
			}
		},
		watch: {
			sass: {
				files: [ "scss/**/*.scss" ],
				tasks: [ "build" ],
				options: {
					spawn: false
				}
			},
			svg: {
				files: [ "svg-source/**/*.svg" ],
				tasks: [ "svg" ],
				options: {
					spawn: false
				}
			}
		},
		"stop-selenium-server": {
			dev: {}
		}
	};

// This loads files in the options folder as task options
// and builds an object based on their file names
function loadConfig(path) {
	var glob = require( "glob" ),
		object = {},
		key;

	glob.sync( "*", { cwd: path } ).forEach( function( option ) {
		key = option.replace( /\.js$/, "" );
		object[ key ] = require( path + option );
	});

	return object;
}

// We no combine the loaded task options with the ones defined in config above
grunt.util._.extend( config, loadConfig( "./tasks/options/" ) );

grunt.initConfig( config );
grunt.loadTasks( "tasks" );
grunt.loadNpmTasks( "perfjankie" );
grunt.registerTask( "default", [ "build", "test" ] );
grunt.registerTask( "test", [ "build", "jshint", "jscs", "csslint" ] );
grunt.registerTask( "build", [ "svg", "sass", "autoprefixer", "cssmin" ] );
grunt.registerTask( "perf", [
	"start-selenium-server",
	"connect:perf",
	"perfjankie",
	"stop-selenium-server"
]);
grunt.registerTask( "svg", [ "svgmin", "svgstore" ] );
};
