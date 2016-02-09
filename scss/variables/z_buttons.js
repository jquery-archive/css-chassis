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
	"ui-btn": {
		name: "Generic Button Styles",
		value: {
		 "font-weight": 500,
		 "margin": ".25em",
		 "text-transform": "uppercase"
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
			"border": "transparent"
		}
	},
	"ui-btn-primary": {
		name: "Primary Button",
		value: {
			"color": "#ffffff",
			"background": "$primary",
			"border": "transparent"
		}
	},
	"ui-btn-success": {
		name: "Success Button",
		value: {
			"color": "#ffffff",
			"background": "$success",
			"border": "transparent"
		}
	},

	"ui-btn-info": {
		name: "Info Button",
		value: {
			"color": "#ffffff",
			"background": "$info",
			"border": "transparent"
		}
	},
	"ui-btn-warning": {
		name: "Warning Button",
		value: {
			"color": "#ffffff",
			"background": "$warning",
			"border": "transparent"
		}
	},
	"ui-btn-danger": {
		name: "Danger Button",
		value: {
			"color": "#ffffff",
			"background": "$error",
			"border": "transparent"
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
