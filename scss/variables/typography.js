( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

var color = "#222",
	fontSize = "20px",
	lineHeight = 1.5;

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
	"blockquote-color": {
		name: "blockquote color",
		value: "#eee"
	},
	"code-background": {
		name: "Code Background Color",
		value: "#F2F2F2"
	},
	"pre-bgcolor": {
		name: "Pre Background Color",
		value: "#f7f7f7"
	},
	"hr-border-color": {
		name: "Horizontal Rule Border Color",
		value: "#999"
	}
};

return chassis;
} ) );
