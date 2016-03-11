( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

var color = "map-get($text, base)",
	fontSize = "20px",
	lineHeight = 1.5;

chassis.typography = {
	"normal": {
		name: "Font weight - Normal",
		value: "normal"
	},
	"bold": {
		name: "Font weight - Bold",
		value: "bold"
	},
	"color": {
		name: "Font color",
		value: color
	},
	"font-size": {
		name: "Font size",
		value: fontSize
	},
	"line-height": {
		name: "Line Height",
		value: lineHeight
	},
	"font-default": {
		name: "Type Style - Default",
		value: {
			"color": color,
			"font-size": fontSize,
			"line-height": lineHeight
		}
	},
	"monospace": {
		name: "Font Family - Monospace",
		value: "\"courier new\", monospace"
	},
	"serif": {
		name: "Font Family - Serif",
		value: "Georgia, \"Times New Roman\", Times, serif"
	},
	"sans": {
		name: "Font Family - Sans",
		value: "Helvetica, Arial, sans-serif"
	},
	"link": {
		name: "Link",
		value: {
			"color": "map-get($primary, base)",
			"decoration": "none",
			"font-weight": "normal"
		}
	},
	"link-hover": {
		name: "Link On Mouse Hover",
		value: {
			"color": "map-get($primary, light)",
			"decoration": "underline",
			"font-weight": "normal"
		}
	},
	"link-focus": {
		name: "Link On Focus or Active",
		value: {
			"color": "map-get($primary, dark)",
			"decoration": "none",
			"font-weight": "normal"
		}
	},
	"link-visited": {
		name: "Link If Visited",
		value: {
			"color": "map-get($primary, base)",
			"decoration": "none",
			"font-weight": "normal"
		}
	},
	"hr": {
		name: "HR style",
		value: {
			"color": "#999",
			"thickness": "1px",
			"style": "solid"
		}
	},
	"code": {
		name: "code style",
		value: {
			"background": "#f2f2f2",
			"border-radius": "3px"
		}
	},
	"pre": {
		name: "Pre style",
		value: {
			"background": "#f7f7f7"
		}
	},
	"h1": {
		name: "H1 Style",
		value: {
			"font-weight": "700",
			"font-size": "67px",
			"capitalization": "none"
		}
	},
	"h2": {
		name: "H2 Style",
		value: {
			"font-weight": "600",
			"font-size": "36px",
			"capitalization": "none"
		}
	},
	"h3": {
		name: "H3 Style",
		value: {
			"font-weight": "600",
			"font-size": "30px",
			"capitalization": "none"
		}
	},
	"h4": {
		name: "H4 Style",
		value: {
			"font-weight": "600",
			"font-size": "24px",
			"capitalization": "none"
		}
	},
	"h5": {
		name: "H5 Style",
		value: {
			"font-weight": "600",
			"font-size": "20px",
			"capitalization": "none"
		}
	},
	"h6": {
		name: "H6 Style",
		value: {
			"font-weight": "600",
			"font-size": "16px",
			"capitalization": "uppercase"
		}
	},
	"blockquote": {
		name: "BlockQuote Style",
		value: {
			"border": "4px solid #eee",
			"font-style": "italic",
			"padding-left": "1em"
		}
	},
	"p": {
		name: "Paragraph style",
		value: {
			"margin-top": "25px",
			"margin-bottom": "25px",
			"margin-left": "0px",
			"margin-right": "0px",
			"text-alignment": "left",
			"font-size": fontSize
		}
	}

};

return chassis;
} ) );
