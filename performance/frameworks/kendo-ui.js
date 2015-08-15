module.exports = {
	css: [ "/bower_components/kendo-ui/styles/kendo.common.min.css",
			"/bower_components/kendo-ui/styles/kendo.default.min.css",
			"/bower_components/kendo-ui/styles/kendo.dataviz.min.css",
			"/bower_components/kendo-ui/styles/kendo.dataviz.default.min.css",
			"/bower_components/kendo-ui/styles/kendo.mobile.all.min.css"
	],
	button: {
		generator: function( options ) {
			var button = "<button class='" + options.type + " " + options.state + " " +
				options.disabled + "' >";
			if ( options.icon ) {
				button = button + "<span class='k-sprite k-icon " + options.icon + "'></span>";
			}
			return button + " Button </button>";
		},
		variations: {
			type: [
			    "k-button",
			    "km-button"
			],
			state: [
				"",
				"k-primary"
			],
			disabled: [
				"",
				"k-state-disabled"
			],
			icon: [
				false,
				"k-i-funnel",
				"k-i-funnel-clear",
				"k-i-refresh"
			]
		}
	}
};
