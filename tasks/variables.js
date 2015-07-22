module.exports = function( grunt ) {
	grunt.registerTask( "variables", function() {
		var jsass = require( "jsass-vars" ),
			path = require( "path" ),
			varPath = path.join( process.cwd(), "scss/variables/*" ),
			distPath = path.join( process.cwd(), "dist" );
		grunt.file.mkdir( distPath );
		jsass( varPath, {
			"dest": distPath,
			"name": "chassis"
		} );
	} );
};
