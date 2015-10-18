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
  "blockquote": {
    name: "Blockquote",
    value: {
      "margin": "0",
      "padding-left": "1em",
      "position": "relative",
      "border-left": "4px solid ",
      "font-style": "italic"
    }
  },
	"code-background": {
		name: "Code Background Color",
		value: "#F2F2F2"
	},
  "code": {
    name: "Code",
    value: {
      "background": "$code-background",
      "font-size": "em( 16px )",
      "padding": "em( 4px, 16px ) em( 8px, 16px )",
      "border-radius": "3px"
    }
  },
	"pre-bgcolor": {
		name: "Pre Background Color",
		value: "#eee"
	},
  "pre": {
    name: "Pre",
    value: {
      "padding": "16px 20px",
      "background": "$pre-bgcolor",
      "font": "normal 12px/1.4 "
    }
  },
	"hr-border-color": {
		name: "Horizontal Rule Border Color",
		value: "#999"
	},
  "hr": {
    name: "Horizontal Rule",
    value: {
      "border": "0",
      "border-bottom": "1px solid "
    }
  },
  "dt-font-weight": {
    name: "Description Term Font Weight",
    value: "600"
  },
  "dd-margin": {
    name: "Description Element Margin",
    value: "0"
  }
};

return chassis;
} ) );
