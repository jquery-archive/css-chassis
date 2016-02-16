( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.uiButton = {
	"ui-btn-shadows": {
		name: "Button Shadow Styles",
		value: {
			"transition": "box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
			"box-shadow-base": "0 2px 5px 0 rgba(0,0,0,.26)",
			"box-shadow-active": "0 8px 15px 0 rgba(0,0,0,.2)",
			"box-shadow-disabled": "0 0 0 rgba(0,0,0,0)"
		}
	},

	"ui-btn": {
		name: "Generic Button Styles",
		value: {
		 "font-weight": 500,
		 "margin": ".25em",
		 "text-transform": "uppercase",
		 "letter-spacing": "1px"
		}
	},
	"ui-btn-font": {
		name: "Button Font",
		value: "$sans"
	},
	"ui-btn-default": {
		name: "Default Button",
		value: {
			"color": "#212121",
			"background": "$default",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"ui-btn-primary": {
		name: "Primary Button",
		value: {
			"color": "#ffffff",
			"background": "$primary",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"ui-btn-success": {
		name: "Success Button",
		value: {
			"color": "#ffffff",
			"background": "$success",
			"border": "transparent",
			"shadow": "true"
		}
	},

	"ui-btn-info": {
		name: "Info Button",
		value: {
			"color": "#ffffff",
			"background": "$info",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"ui-btn-warning": {
		name: "Warning Button",
		value: {
			"color": "#ffffff",
			"background": "$warning",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"ui-btn-danger": {
		name: "Danger Button",
		value: {
			"color": "#ffffff",
			"background": "$error",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"ui-btn-disabled": {
		name: "Disabled Button",
		value: {
			"opacity": ".6"
		}
	},
	"ui-btn-lg": {
		name: "Large Button",
		value: {
			"border-radius": "2px",
			"font-size": "16px",
			"line-height": "16px",
			"padding": ".75em 1.25em"
		}
	},
	"ui-btn-md": {
		name: "Medium Sized Button",
		value: {
			"border-radius": "2px",
			"font-size": "14px",
			"line-height": "14px",
			"padding": ".5em 1em"
		}
	},
	"ui-btn-sm": {
		name: "Small Button",
		value: {
			"border-radius": "2px",
			"font-size": "12px",
			"line-height": "12px",
			"padding": ".45em .75em"
		}
	},
	"ui-btn-xs": {
		name: "Extra Small Button",
		value: {
			"border-radius": "2px",
			"font-size": "12px",
			"line-height": "12px",
			"padding": ".35em"
		}
	}
};

return chassis;
} ) );
