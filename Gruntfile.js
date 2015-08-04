module.exports = function( grunt ) {
	grunt.loadNpmTasks("axe-grunt-webdriver");
	var path = require( "path" );
	require( "load-grunt-config" )( grunt, {
		configPath: [
			path.join( process.cwd(), "tasks/options" ),
			path.join( process.cwd(), "tasks" )
		],
		init: true
	} );
};
