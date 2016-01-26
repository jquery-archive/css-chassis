( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.colors = {
	"primary": {
		name: "Primary Colors",
		value: {
			"base": "#3F51B5",
			"light": "#5C6BC0",
			"dark": "#3949AB",
			"darker": "#303F9F"
		}
	},
	"success": {
			name: "Success Colors",
			value: {
				"base": "#8BC34A",
				"light": "#9CCC65",
				"dark": "#8BC34A",
				"darker": "#689F38"
			}
		},
		"warning": {
			name: "Warning Colors",
			value: {
				"base": "#FF9800",
				"light": "#FFA726",
				"dark": "#FB8C00",
				"darker": "#F57C00"
		}
	},
		"info": {
			name: "Info Colors",
			value: {
				"base": "#00BCD4",
				"light": "#26C6DA",
				"dark": "#00ACC1",
				"darker": "#0097A7"
			}
	},
	"error": {
			name: "Error Colors",
			value: {
				"base": "#F44336",
				"light": "#EF5350",
				"dark": "#E53935",
				"darker": "#D32F2F"
			}
	},
	"text": {
			name: "Text Colors",
			value: {
				"base": "#212121",
				"light": "#727272"
			}
	},
	"background": {
		 name: "Background Colors",
		 value: {
			"base": "#fff"
		}
	}
};
return chassis;
} ) );
