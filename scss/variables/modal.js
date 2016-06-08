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

chassis.modal = {

	"shadows": {
		name: "Modal shadow styles",
		value: {
			"base": "0px 8px 11px 0px rgba(0,0,0,0.15)"
		}
	},
	"borders": {
		name: "Modal border styles",
		value: {
			"radius": "3px"
		}
	},
	"padding": {
		name: "Modal Padding value",
		value: {
			"padding": "12px"
		}
	},
	"element": {
		name: "Generic modal styles",
		value: {
			"margin": "12px",
			"border": "1px solid",
			"border-color": () => "colors.default",
			"background": () => "colors.background"
		}
	},
	"title": {
		name: "Modal Title Styles",
		value: {
			"font-size": "24px",
			"font-weight": "700",
			"margin": "0px"
		}
	},
	"header": {
		name: "Modal Header styles",
		value: {
			"margin": "0px",
			"background": () => "colors.background"
		}
	},
	"body": {
		name: "Modal Body styles",
		value: {
			"margin": "0px",
			"background": () => "colors.background",
			"overflow-y": "scroll"
		}
	},
	"footer": {
		name: "Modal Footer styles",
		value: {
			"margin": "0px",
			"background": () => "colors.background"
		}
	}
};

return chassis;
} ) );
