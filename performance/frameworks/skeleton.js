module.exports = {
	css: [
		"//cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
	],
	button: {
		generator: function( options ) {
			var button = "<button class='" + options.state + "'>";
			return button + "Button</button>";
		},
		variations: {
			state: [
				"",
				" button-primary"
			]
		}
	}
};
