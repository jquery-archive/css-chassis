( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.inputs = {
	"shadows": {
		name: "Styles for input shadows",
		value: {
			"disabled": "0 0 2px 0 rgba(0, 0, 0, 0.12)",
			"normal": "0 2px 2px 0 rgba(0, 0, 0, 0.12)",
			"focus-base": "0 0 8px 0 rgba(0, 0, 0, 0.08)",
			"focus-spread": "0 8px 8px 0 rgba(0, 0, 0, 0.18)",
			"error-base": "0 0 2px 0 rgba(198,62,54,0.24)",
			"error-spread": "0 2px 2px 0 rgba(198,62,54,0.48)"
		}
	},
	"transitions": {
		name: "Transition animations",
		value: {
			"focus-shadow": "box-shadow .25s",
			"focus-border-color": "border-color .25s",
			"blur-shadow": "box-shadow .1s",
			"blur-border-color": "border-color .1s"
		}
	},
	"label": {
		name: "Styles for input label",
		value: {
			"display": "block",
			"max-width": "100%",
			"font-size": "18px",
			"font-weight": "600",
			"margin": "8px"
		}
	},
	"label-error": {
		name: "Styles for error labels",
		value: {
			"font-size": "14px",
			color: () => "colors.error",
			"font-weight": "400"
		}
	},
	"element": {
		name: "Generic styles for single line inputs",
		value: {
			"padding": "15px",
			"margin": "0px",
			"border": "1px solid",
			"border-color": () => "colors.text",
			"border-radius": "3px",
			"font-size": "18px",
			"width": "100%",
			"background": () => "colors.background"
		}
	},
	"disabled": {
		name: "Styles for disabled input",
		value: {
			"border-color": () => "colors.default",
			"background": () => "colors.default",
			"color": () => "colors.default",
			"cursor": "not-allowed"
		}
	},
	"focus": {
		name: "Styles for in focus inputs",
		value: {
			"border-color": () => "colors.info",
			"outline": "none"
		}
	},
	"active": {
		name: "Styles for active inputs",
		value: {
			"border-color": () => "colors.info"
		}
	},
	"error": {
		name: "Styles for error state of inputs",
		value: {
			"border-color": () => "colors.error",
			"background":  () => "colors.error"
		}
	},
	"lg": {
		name: "Styles for large sized inputs",
		value: {
			"font-size": "30px"
		}
	},
	"sm": {
		name: "Styles for small sized inputs",
		value: {
			"font-size": "14px"
		}
	},
	"radiobutton": {
		name: "Styles for custom radio buttons",
		value: {
			"width": "20px",
			"height": "20px",
			"default-color": () => "colors.text",
			"checked-color": () => "colors.info"
		}
	}

};
return chassis;
} ) );
