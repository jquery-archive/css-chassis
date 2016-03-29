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

chassis.btn = {
	"shadows": {
		name: "Button Shadow Styles",
		value: {
			"transition": "box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
			"box-shadow-base": "0 2px 5px 0 rgba(0,0,0,.26)",
			"box-shadow-active": "0 3px 10px 0 rgba(0,0,0,.2)",
			"box-shadow-disabled": "0 0 0 rgba(0,0,0,0)"
		}
	},

	"element": {
		name: "Generic Button Styles",
		value: {
			"font-weight": 500,
			"margin": ".25em",
			"text-transform": "uppercase",
			"letter-spacing": "1px"
		}
	},
	"font": {
		name: "Button Font",
		value: () => "typography.sans"
	},
	"default": {
		name: "Default Button",
		value: {
			"color": "#212121",
			"background": () => "colors.default",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"primary": {
		name: "Primary Button",
		value: {
			"color": "#ffffff",
			"background": () => "colors.primary",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"success": {
		name: "Success Button",
		value: {
			"color": "#ffffff",
			"background": () => "colors.success",
			"border": "transparent",
			"shadow": "true"
		}
	},

	"info": {
		name: "Info Button",
		value: {
			"color": "#ffffff",
			"background": () => "colors.info",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"warning": {
		name: "Warning Button",
		value: {
			"color": "#ffffff",
			"background": () => "colors.warning",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"danger": {
		name: "Danger Button",
		value: {
			"color": "#ffffff",
			"background": () => "colors.error",
			"border": "transparent",
			"shadow": "true"
		}
	},
	"disable": {
		name: "Disabled Button",
		value: {
			"color-opacity": 0.6,
			"background-opacity": 0.3,
			"cursor": "not-allowed"
		}
	},
	"lg": {
		name: "Large Button",
		value: {
			"border-radius": "2px",
			"font-size": "16px",
			"line-height": "16px",
			"padding": ".75em 1.25em"
		}
	},
	"md": {
		name: "Medium Sized Button",
		value: {
			"border-radius": "2px",
			"font-size": "14px",
			"line-height": "14px",
			"padding": ".5em 1em"
		}
	},
	"sm": {
		name: "Small Button",
		value: {
			"border-radius": "2px",
			"font-size": "12px",
			"line-height": "12px",
			"padding": ".45em .75em"
		}
	},
	"xs": {
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
