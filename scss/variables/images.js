( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.images = {
	"img-default": {
		name: "Image - Normal",
		value: {
			"alignment": "middle"
		}
	},
	"img-round": {
		name: "Image - Rounded",
		value: {
			"border-radius": "9px"
		}
	},
	"img-circle": {
		name: "Image - Circle",
		value: {
			"border-radius": "50%"
		}
	},
	"img-thumbnail": {
		name: "Image - Thumbnail",
		value: {
			"padding": "4px",
			"line-height": "1.5",
			"background-color": "#fff",
			"border-width": "1px",
			"border-style": "solid",
			"border-color": "#f5f5f5",
			"border-radius": "4px"
		}
	}

};

return chassis;
} ) );
