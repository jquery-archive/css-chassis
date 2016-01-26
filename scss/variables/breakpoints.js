( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.breakpoints = {

	"viewport-sm-min": {
		name: "Viewport Breakpoint - Small Minimum Width",
		value: "400px"
	},
	"viewport-md-min": {
		name: "Viewport Breakpoint - Medium Minimum Width",
		value: "768px"
	},
	"viewport-lg-min": {
		name: "Viewport Breakpoint - Large Minimum Width",
		value: "920px"
	},
	"viewport-xl-min": {
		name: "Viewport - Extra Large Minimum Width",
		value: "1200px"
	}
};

return chassis;
} ) );
