module.exports = {
	css: [
		"//cdn.foundation5.zurb.com/foundation.css",
		"//cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.eot",
		"https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.min.css"
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
