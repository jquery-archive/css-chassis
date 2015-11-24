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
		 "text-transform": "none"
		}
	},
	"ui-btn-default": {
		name: "Default Button",
		value: {
			"color": "#383838",
			"background": "#ffffff"
		}
	},
	"ui-btn-primary": {
		name: "Primary Button",
		value: {
			"color": "#ffffff",
			"background": "#337ab7"
		}
	},
	"ui-btn-success": {
		name: "Success Button",
		value: {
			"color": "#ffffff",
			"background": "#5cb85c"
		}
	},
	"ui-btn-info": {
		name: "Info Button",
		value: {
			"color": "#ffffff",
			"background": "#5bc0de"
		}
	},
	"ui-btn-warning": {
		name: "Warning Button",
		value: {
			"color": "#ffffff",
			"background": "#f0ad4e"
		}
	},
	"ui-btn-danger": {
		name: "Danger Button",
		value: {
			"color": "#ffffff",
			"background": "#d9534f"
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
			"padding": ".35em .75em"
		}
	},
  "ui-btn-xs": {
		name: "Extra Small Button",
		value: {
			"border-radius": "2px",
			"font-size": "12px",
			"line-height": "12px",
			"padding": ".2em .35em"
		}
	}
};

return chassis;
} ) );
