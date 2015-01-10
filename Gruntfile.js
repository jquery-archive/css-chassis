module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-contrib-jshint" );
grunt.loadNpmTasks( "grunt-html" );
grunt.loadNpmTasks( "grunt-jscs" );
grunt.loadNpmTasks( "grunt-sass" );
grunt.loadNpmTasks( "grunt-autoprefixer" );
grunt.loadNpmTasks( "grunt-contrib-watch" );

grunt.initConfig({
	jshint: {
		files: [ "*.js" ],
		options: {
			jshintrc: ".jshintrc"
		}
	},
	jscs: {
		all: [ "*.js" ]
	},
	sass: {
		dist: {
			options: {
				sourceMap: true,
				outputStyle: "compressed"
			},
			files: [ {
				expand: true,
				cwd: "scss",
				src: [ "*.scss" ],
				dest: "",
				ext: ".css"
			} ]
		}
	},

	autoprefixer: {
		dist: {
			options: {
				map: true,

				// Target-specific options go here.
				// browser-specific info: https://github.com/ai/autoprefixer#browsers
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
			src: [
			"*.css"
			]
		}
	},
	watch: {
		sass: {
			files: [ "scss/**/*.scss" ],
			tasks: [ "sass", "autoprefixer" ],
			options: {
				spawn: false
			}
		}
	}
});

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

};
