( function ( root, factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ "./chassis" ], factory );
    } else if (typeof exports === 'object') {
        module.exports = factory( require('./chassis') );
    } else {
        root.chassis = factory( root.chassis );
    }
}(this, function ( chassis ) {
var colors = {
	"chassis-gray-dark": {
		"value": "#383838",
		"name": "Chassis Gray - Dark"
	},
	"chassis-gray": {
		"value": "#c1c1c1",
		"name": "Chassis Gray"
	},
	"chassis-gray-light": {
		"value": "#f2f2f2",
		"name": "Chassis Gray - Light"
	},
	"chassis-blue-dark": {
		"value": "#388695",
		"name": "Chassis Blue - Dark"
	},
	"chassis-blue": {
		"value": "#4fc0c8",
		"name": "Chassis Blue"
	},
	"chassis-yellow": {
		"value": "#fadf51",
		"name": "Chassis Yellow"
	}
}
chassis.colors = {
	"background": colors[ "chassis-gray-dark" ],
	"font": colors[ "chassis-gray-dark" ],
	"link": colors[ "chassis-blue-dark" ],
	"button": colors[ "chassis-blue" ],
	"buttonText": colors[ "chassis-gray-light" ],
	"blockquoteBorder": {
		name: "Chassis - Blockquote color",
		value: "#eee"
	}
}
return chassis;
} ) );
