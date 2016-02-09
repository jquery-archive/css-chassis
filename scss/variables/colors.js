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
	"default": {
		name: "Default Colors",
		value: {
			"base": "transparent",
			"light": "transparent",
			"dark": "transparent",
			"darker": "transparent"
		}
	},
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
				"base": "#43A047",
				"light": "#4CAF50",
				"dark": "#388E3C",
				"darker": "#2E7D32"
			}
		},
	 "warning": {
			name: "Warning Colors",
			value: {
				"base": "#FF5722",
				"light": "#FF7043",
				"dark": "#F4511E",
				"darker": "#E64A19"
		 }
	 },
		"info": {
			name: "Info Colors",
			value: {
				"base": "#039BE5",
				"light": "#03A9F4",
				"dark": "#0288D1",
				"darker": "#0277BD"
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
