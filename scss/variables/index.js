var fs = require( "fs" );
var path = require( "path" );
var varPath = path.join( process.cwd(), "scss/variables" );
var chassis;

fs.readdirSync( varPath ).forEach( function( file ) {
	chassis = require( path.join( process.cwd(), "scss/variables" ) + "/" + file );
} );

module.exports = chassis;