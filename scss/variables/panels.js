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

chassis.panel = {
	"shadows": {
		name: "Shaodw styles for panels",
		value: {
			"spread": "0px 2px 2px 0px rgba(0,0,0,0.24)",
			"base": "0px 0px 2px 0px rgba(0,0,0,0.12)"
		}
	},
	"border-radius": {
		name: "Style for panel's border radius",
		value: {
			"border-radius": "3px"
		}
	},
	"element": {
		name: "Base element styles for panels",
		value: {
			"padding": "20px",
			"border": "1px solid",
			"border-color": () => "colors.text"
		}
	},
	"body": {
		name: "Styles for panel body",
		value: {
			"padding": "20px"
		}
	},
	"header": {
		name: "Styles for modal header",
		value: {
			"vertical-padding": "15px",
			"horizontal-padding": "20px",
			"color": "#000",
			"background": () => "colors.default"
		}
	},
	"header-default":{
		name: "Styles for default panel header",
		value: {
			"color": "#000",
			"background": () => "colors.default"
		}
	},
	"header-success": {
		name: "Styles for success panel header",
		value: {
			"color": "#fff",
			"background": () => "colors.success"
		}
	},
	"header-warning": {
		name: "Styles for warning panel header",
		value: {
			"color": "#fff",
			"background": () => "colors.warning"
		}
	},
	"header-error": {
		name: "Styles for error panel header",
		value: {
			"color": "#fff",
			"background": () => "colors.error"
		}
	},
	"header-info":{
		name: "Styles for info panel header",
		value: {
			"color": "#fff",
			"background": () => "colors.info"
		}
	},
	"title": {
		name: "Styles for panel title",
		value: {
			"display": "block",
			"width": "100%",
			"font-weight": "600",
			"font-size": "22px"
		}
	},
	"default": {
		name: "Styles for default panel",
		value: {
			"border-color": () => "colors.text",
			"background": () => "colors.default"
		}
	},
	"success": {
		name: "Styles for success panel",
		value: {
			color: "#ffffff",
			"border-color": () => "colors.success",
			"background": () => "colors.success"
		}
	},
	"warning": {
		name: "Styles for warning panel",
		value: {
			color: "#ffffff",
			"border-color": () => "colors.warning",
			"background": () => "colors.warning"
		}
	},
	"error": {
		name: "Styles for error panel",
		value: {
			color: "#ffffff",
			"border-color": () => "colors.error",
			"background": () => "colors.error"
		}
	},
	"info": {
		name: "Styles for info panel",
		value: {
			color: "#ffffff",
			"border-color": () => "colors.info",
			"background": () => "colors.info"
		}
	}

};

return chassis;
} ) );
