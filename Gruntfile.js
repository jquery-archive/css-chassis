module.exports = function( grunt ) {

require( "load-grunt-tasks" )( grunt );

var config = {
		jshint: {
			files: [ "*.js", "performance/*.js", "performance/frameworks/*.js" ],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		jscs: {
			all: [ "*.js", "performance/*.js", "performance/frameworks/*.js" ]
		}
	};

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

grunt.util._.extend( config, loadConfig( "./tasks/options/" ) );

grunt.initConfig( config );
grunt.loadNpmTasks( "perfjankie" );
grunt.registerTask( "default", [ "jshint", "jscs" ] );
grunt.registerTask( "perf", [ "start-selenium-server", "connect:perf", "perfjankie" ] );
};
