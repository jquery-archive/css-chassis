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

chassis.table = {
	"base": {
		name: "Table Element",
		value: {
			"margin": "0 0 1em",
			"font-size": () => "typography.default",
			"thead-font-size": "12px",
			"border-width": "1px",
			"border-style": "solid",
			"border-color": () => "colors.default",
			"padding": "12px",
			"font-weight": 400
		}
	}
};

return chassis;
} ) );
