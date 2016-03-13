( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.input = {
	"ui-input-shadows": {
		name: "Input Shadow Styles",
		value: {
			"box-shadow-normal": "inset 0 1px 3px  rgba(0,0,0,.24)",
			"box-shadow-focus": "0 0 5px rgba(92, 107, 192, .56)",
			"box-shadow-active": "0 0 5px rgba(92, 107, 192, .56)"
		}
	},
	"ui-input-borders":{
		name: "Input border styles",
		value: {
			"border-normal": "1px solid #727272",
			"border-active": "1px solid #5C6BC0",
			"border-focus": "1px solid #5C6BC0",
			"border-disabled": "1px solid #727272",
			"border-hover": "1px solid #5C6BC0"
		}
	},
	"ui-input-backgrounds": {
		name: "Input background colors",
		value: {
			"background-normal": "#FFFFFF",
			"background-focus": "#FFFFFF",
			"background-disabled": "#E0E0E0"
		}
	},
	"ui-input": {
		name: "Normal state input styles",
		value: {
			"border-radius": "0px",
			"padding": "15px",
			"width" : "100%"
		}
	}
};

return chassis;
} ) );
