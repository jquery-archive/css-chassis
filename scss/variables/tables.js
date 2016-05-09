( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.table = {
	"base": {
		name: "Table Element",
		value: {
			"margin": "0 0 1em",
			"font-size": "16px",
			"thead-font-size": "12px",
			"border": "1px solid #eee",
			"padding": "12px"
		}
	}
};

return chassis;
} ) );
