( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.notifications = {

	"shadows": {
		name: "Notification Shadow Style",
		value: {
			"box-shadow-base": "0 8px 11px 0 rgba(0,0,0,0.15)"
		}
	},
	"title": {
		name: "Style for the title of the notification",
		value: {
			"font-weight": 600
		}
	},
	"element": {
		name: "Generic Notification Style",
		value: {
			"border-radius": "3px",
			"margin": ".25em",
			"letter-spacing": "1px",
			"font-weight": "400",
			"font-size": "18px",
			"padding": "15px 15px 15px 25px"
		}
	},
	"default": {
		name: "Default Notification",
		value: {
			"color": () => "colors.default",
			"background": () => "colors.primary"
		}
	},
	"info": {
		name: "Info Notification",
		value: {
			"color": () => "colors.default",
			"background": () => "colors.info"
		}
	},
	"success": {
		name: "Success Notification",
		value: {
			"color": () => "colors.default",
			"background": () => "colors.success"
		}
	},
	"warning": {
		name: "Warning Notification",
		value: {
			"color": () => "colors.default",
			"background": () => "colors.warning"
		}
	},
	"error": {
		name: "Error Notification",
		value: {
			"color": () => "colors.default",
			"background": () => "colors.error"
		}
	}
};

return chassis;
} ) );
