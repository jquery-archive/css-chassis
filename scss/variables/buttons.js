( function ( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if (typeof exports === "object") {
		module.exports = factory( require("./chassis") );
	} else {
		root.chassis = factory( root.chassis );
	}
}(this, function ( chassis ) {


chassis.uiButton = {
	"ui-button-default-color": {
		name: "Default Button Color",
		value: "#383838"
	},
	"ui-button-default-background": {
		name: "Default Button Background",
		value: "#ffffff"
	},
	"ui-button-primary-color": {
		name: "Primary Button Color",
		value: "#ffffff"
	},
	"ui-button-primary-background": {
		name: "Primary Button Background",
		value: "#337ab7"
	},
	"ui-button-success-color": {
		name: "Success Button Color",
		value: "#ffffff"
	},
	"ui-button-success-background": {
		name: "Success Button Background",
		value: "#5cb85c"
	},
	"ui-button-info-color": {
		name: "Info Button Color",
		value: "#ffffff"
	},
	"ui-button-info-background": {
		name: "Info Button Background",
		value: "#5bc0de"
	},
	"ui-button-warning-color": {
		name: "Warning Button Color",
		value: "#ffffff"
	},
	"ui-button-warning-background": {
		name: "Warning Button Background",
		value: "#f0ad4e"
	},
	"ui-button-danger-color": {
		name: "Danger Button Color",
		value: "#ffffff"
	},
	"ui-button-danger-background": {
		name: "Danger Button Background",
		value: "#d9534f"
	},
	"ui-button-disabled-opacity": {
		name: "Disabled Button Opacity",
		value: .6
	},
	"ui-button-font-weight": {
		name: "Button Font Weight",
		value: 500
	},
	"ui-button-margin": {
		name: "Button Margin",
		value: ".25em"
	},
	"ui-button-text-transform": {
		name: "Button Text Transform",
		value: "none"
	},
	"ui-button-border-width": {
		name: "Button Border Width",
		value: "1px"
	},
	"ui-button-large": {
		name: "Large Button",
		value: {
			"border-radius": "6px",
			"font-size": "16px",
			"line-height": "16px",
			"padding": ".75em 1.25em"
		}
	},
	"ui-button-default": {
		name: "Default Button",
		value: {
			"border-radius": "4px",
			"font-size": "14px",
			"line-height": "14px",
			"padding": ".5em 1em"
		}
	},
	"ui-button-small": {
		name: "Small Button",
		value: {
			"border-radius": "3px",
			"font-size": "12px",
			"line-height": "12px",
			"padding": ".35em .75em"
		}
	},
  "ui-button-extra-small": {
		name: "Extra Small Button",
		value: {
			"border-radius": "3px",
			"font-size": "12px",
			"line-height": "12px",
			"padding": ".2em .35em"
		}
	},
};

return chassis;
} ) );
