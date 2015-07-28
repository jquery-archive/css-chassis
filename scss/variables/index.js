var fs = require( "fs" ),
 path = require( "path" ),
 varPath = path.join( process.cwd(), "scss/variables" ),
 chassis;

fs.readdirSync( varPath ).forEach( function( file ) {
	chassis = require( path.join( process.cwd(), "scss/variables" ) + "/" + file );
} );

module.exports = chassis;
