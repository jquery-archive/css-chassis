module.exports = {
	css: [ "//cdn.kendostatic.com/2014.1.318/styles/kendo.common.min.css",
			"//cdn.kendostatic.com/2014.1.318/styles/kendo.default.min.css",
			"//cdn.kendostatic.com/2014.1.318/styles/kendo.dataviz.min.css",
			"//cdn.kendostatic.com/2014.1.318/styles/kendo.dataviz.default.min.css",
			"//cdn.kendostatic.com/2012.1.318/styles/kendo.mobile.all.min.css"
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
