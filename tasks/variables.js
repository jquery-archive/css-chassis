module.exports = function( grunt ) {
	grunt.registerTask( "variables", function() {
		var jsass = require( "jsass-vars" );
		var path = require( "path" );
		var varPath = path.join( process.cwd(), "scss/variables/*" );

		jsass( varPath, {
			"dest": path.join( process.cwd(), "dist" ),
			"name": "chassis"
		} );
	} )
};