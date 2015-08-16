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
		value: "uppercase"
	},
	"ui-button-large": {
		name: "Large Button",
		value: {
			"font-size": "20px",
			"line-height": "20px",
			"padding": ".75em"
		}
	},
	"ui-button-default": {
		name: "Default Button",
		value: {
			"font-size": "16px",
			"line-height": "16px",
			"padding": ".5em"
		}
	},
	"ui-button-small": {
		name: "Small Button",
		value: {
			"font-size": "14px",
			"line-height": "14px",
			"padding": ".2em .5em"
		}
	},
  "ui-button-extra-small": {
		name: "Extra Small Button",
		value: {
			"font-size": "12px",
			"line-height": "12px",
			"padding": ".2em .5em"
		}
	},
};

return chassis;
} ) );
