(function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.formelements = {
	"searchbox" : {
		name: "Search Input Styling",
		value: {
			"border-color" : "#212f3d",
			"color" : "#566573"
		}
	},
	"emailbox": {
		name: "Email Input Styling",
		value: {
			"valid": {
				"color": "#566573",
				"border-color": "#212f3d"
			},
			"invalid": {
				"color": "#566573",
				"border-color": "#e74c3c"
			}
		}
	}
};

return chassis;
} ) );
