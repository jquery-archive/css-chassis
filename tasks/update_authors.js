module.exports = function( grunt ) {
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
};