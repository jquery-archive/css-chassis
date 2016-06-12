( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis", "./colors", "./typograpy" ], factory );
	} else if ( typeof exports === "object" ) {
		require( "./chassis" );
		require( "./colors" );
		module.exports = factory( require( "./typography" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.panels = {

};

return chassis;
} ) );
