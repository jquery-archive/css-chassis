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
			"inset": "inset 0px 2px 2px 0px rgba(0,0,0,0.10)",
			"focus": "0px 0px 2px 1px #03a9f4",
			"error": "0px 0px 2px 1px #F44336",
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
			"display": "inline",
			"max-width": "100%",
			"font-size": "20px",
			"margin": "5px"
		}
	},
	"label-md": {
		name: "Styles for small input lables",
		value: {
			"font-size": "28px"
		}
	},
	"label-lg": {
		name: "Styles for large input lables",
		value: {
			"font-size": "36px"
		}
	},
	"label-xs": {
		name: "Styles for extra small input labels",
		value: {
			"font-size": "14px"
		}
	},
	"label-error": {
		name: "Styles for error labels",
		value: {
			color: () => "colors.error",
			"font-weight": "400"
		}
	},
	"input-full-width": {
		name: "Generic styles for single line inputs",
		value: {
			"padding": "10px",
			"margin": "0px",
			"border": "1px solid",
			"border-color": () => "colors.text",
			"border-radius": "2px",
			"font-size": "20px",
			"width": "100%",
			"background": () => "colors.background"
		}
	},
	"disabled": {
		name: "Styles for disabled input",
		value: {
			"border-color": () => "colors.text",
			"background": () => "colors.default",
			"color": () => "colors.text",
			"cursor": "not-allowed"
		}
	},
	"readonly": {
		name: "Styles for readonly inputs",
		value: {
			"border-color": () => "colors.text",
			"background": () => "colors.default",
			"color": () => "colors.text",
			"cursor": "auto"
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
	"input-md": {
		name: "Styles for large sized inputs",
		value: {
			"font-size": "28px"
		}
	},
	"input-lg": {
		name: "Styles for small sized inputs",
		value: {
			"font-size": "36px"
		}
	},
	"input-xs": {
		name: "Styles for extra small sized inputs",
		value: {
			"font-size": "14px"
		}
	},
	"radio": {
		name: "Styles for custom radio buttons",
		value: {
			"width": "20px",
			"height": "20px",
			"default-color": () => "colors.text",
			"checked-color": () => "colors.primary"
		}
	},
	"checkbox": {
		name: "Styles for custom radio buttons",
		value: {
			"width": "20px",
			"height": "20px",
			"default-color": () => "colors.text",
			"checked-color": () => "colors.primary"
		}
	}
};
return chassis;
} ) );
