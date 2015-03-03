module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-contrib-jshint" );
grunt.loadNpmTasks( "grunt-html" );
grunt.loadNpmTasks( "grunt-jscs" );
grunt.loadNpmTasks( "grunt-svgmin" );
grunt.loadNpmTasks( "grunt-svgstore" );
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
			src: "*.css"
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
			tasks: [ "svgmin", "svgstore" ],
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
grunt.registerTask( "build", [ "sass", "autoprefixer" ] );

};
