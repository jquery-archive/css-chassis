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
	lineHeight = 1.5,
	linkColor = "map-get($primary, light)";

chassis.typography = {
	normal: {
		name: "Font weight - Normal",
		value: "normal"
	},
	bold: {
		name: "Font weight - Bold",
		value: "bold"
	},
	color: {
		name: "Font color",
		value: color
	},
	fontSize: {
		name: "Font size",
		value: fontSize
	},
	lineHeight: {
		name: "Line Height",
		value: lineHeight
	},
	defaultFont: {
		name: "Type Style - Default",
		value: {
			color: color,
			"font-size": fontSize,
			"line-height": lineHeight
		}
	},
	monospace: {
		name: "Font Family - Monospace",
		value: "\"courier new\", monospace"
	},
	serif: {
		name: "Font Family - Serif",
		value: "Georgia, \"Times New Roman\", Times, serif"
	},
	sans: {
		name: "Font Family - Sans",
		value: "Helvetica, Arial, sans-serif"
	},
	link: {
		name: "Link",
		value: {
			color: linkColor,
			decoration: "none"
		}
	},
	"link-hover": {
		name: "Link On Mouse Hover",
		value: {
			color: linkColor,
			decoration: "underline"
		}
	},
	"link-focus": {
		name: "Link On Focus or Active",
		value: {
			color: linkColor,
			decoration: "none"
		}
	},
	"link-visited": {
		name: "Link If Visited",
		value: {
			color: linkColor,
			decoration: "none"
		}
	},
	hr: {
		name: "HR style",
		value: {
			color: "#999",
			thickness: "1px",
			style: "solid"
		}
	},
	code: {
		name: "code style",
		value: {
			background: "#f2f2f2",
			borderRadius: "3px"
		}
	},
	pre: {
		name: "Pre style",
		value: {
			background: "#f7f7f7"
		}
	},
	h1: {
		name: "H1 Style",
		value: {
			fontWeight: "700",
			fontSize: "67px",
			capitalization: "none"
		}
	},
	h2: {
		name: "H2 Style",
		value: {
			fontWeight: "600",
			fontSize: "36px",
			capitalization: "none"
		}
	},
	h3: {
		name: "H3 Style",
		value: {
			fontWeight: "600",
			fontSize: "30px",
			capitalization: "none"
		}
	},
	h4: {
		name: "H4 Style",
		value: {
			fontWeight: "600",
			fontSize: "24px",
			capitalization: "none"
		}
	},
	h5: {
		name: "H5 Style",
		value: {
			fontWeight: "600",
			fontSize: "20px",
			capitalization: "none"
		}
	},
	h6: {
		name: "H6 Style",
		value: {
			fontWeight: "600",
			fontSize: "16px",
			capitalization: "uppercase"
		}
	}

};

return chassis;
} ) );
