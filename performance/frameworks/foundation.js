module.exports = {
	css: [
		"/external/foundation/css/foundation.css",
		"/external/foundation-icon-fonts/foundation-icons.eot",
		"/external/foundation-icon-fonts/foundation-icons.css"
	],
	button: {
		generator: function( options ) {
			var button = "<button class='button" + options.state + options.size + options.shape +
				"' >";
			if ( options.icon ) {
				button = button + "<i class='fi-" + options.icon +
					"'></i>";
			}
			return button + " Button </button>";
		},
		variations: {
			state: [
				"",
				" secondary",
				" alert",
				" info",
				" disabled",
				" success"
			],
			size: [
				"",
				" tiny",
				" small",
				" large"
			],
			shape: [
				" round",
				" radius",
				" expand"
			],
			icon: [
				false,
				"compas",
				"power",
				"crown",
				"skull",
				"map"
			]
		}
	}
};
