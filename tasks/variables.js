module.exports = function( grunt ) {
	grunt.registerTask( "variables", function() {
		var jsass = require( "jsass-vars" );
		var path = require( "path" );
		var varPath = path.join( process.cwd(), "scss/variables/*" );
		var distPath = path.join( process.cwd(), "dist" );
		grunt.file.mkdir( distPath );
		jsass( varPath, {
			"dest": distPath,
			"name": "chassis"
		} );
	} )
};
