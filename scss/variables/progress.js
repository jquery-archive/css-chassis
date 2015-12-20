( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {
var progress = {
	"ui-meter-shadow": {
		name: "Meter Box Shadow",
		value: "none"
	},
	"ui-meter-width": {
		name: "Meter Width",
		value: "200px"
	},
	"ui-meter-height": {
		name: " Meter Height",
		value: "5px"
	},
	"ui-meter-color": {
		name: "Meter Color",
		value: "white"
	},
	"ui-meter-background": {
		name: "Meter Backgound Color",
		value: "#dddddd"
	},
	"ui-meter-animation-time": {
		name: "Meter Animation Time",
		value: "3s"
	},
	"ui-meter-border-radius": {
		name: "Meter Border Radius",
		value: 0
	},
	"ui-meter-border-size": {
		name: "Meter Border Size",
		value: "0px"
	},
	"ui-meter-border-color": {
		name: "Meter Border Color",
		value: "#cfcfcf"
	},
	"ui-meter-optimum-background": {
		name: "Meter Optimum Bacground Color",
		value: "#009688"
	},
	"ui-meter-optimum-color": {
		name: " Meter Optimum Color",
		value: "#dddddd"
	},
	"ui-meter-suboptimum-background": {
		name: "Meter Suboptimum Background Color",
		value: "#FDE93B"
	},
	"ui-meter-suboptimum-color": {
		name: "Meter Suboptimum Color",
		value: "#dddddd"
	},
	"ui-meter-bad-background": {
		name: "Meter bad Background Color",
		value: "#F44336"
	},
	"ui-meter-bad-color": {
		name: "Meter Bad Color",
		value: "#dddddd"
	},
	"ui-progress-shadow": {
		name: "Meter Box Shadow",
		value: "none"
	},
	"ui-progress-width": {
		name: "Progress Width",
		value: "200px"
	},
	"ui-progress-height": {
		name: " Progress Height",
		value: "5px"
	},
	"ui-progress-color": {
		name: "Progress Color",
		value: "white"
	},
	"ui-progress-background": {
		name: "Progress Backgound Color",
		value: "#dddddd"
	},
	"ui-progress-animation-time": {
		name: "Progress Animation Time",
		value: "3s"
	},
	"ui-progress-border-radius": {
		name: "Progress Border Radius",
		value: 0
	},
	"ui-progress-border-size": {
		name: "Progress Border Size",
		value: "0px"
	},
	"ui-progress-border-color": {
		name: "Progress Border Color",
		value: "#cfcfcf"
	},
	"ui-progress-optimum-background": {
		name: "Progress Optimum Bacground Color",
		value: "#37bfc9"
	},
	"ui-progress-optimum-color": {
		name: " Progress Optimum Color",
		value: "#dddddd"
	},
	"ui-progress-suboptimum-background":{
		name: "Progress Suboptimum Background Color",
		value: " #FFDC4A"
	},
	"ui-progress-suboptimum-color": {
		name: "Progress Suboptimum Color",
		value: "#dddddd"
	},
	"ui-progress-bad-background": {
		name: "Progress bad Background Color",
		value: "red"
	},
	"ui-progress-bad-color": {
		name: "Progress Bad Color",
		value: "#dddddd"
	}

};
chassis.progress = progress;
return chassis;
} ) );
