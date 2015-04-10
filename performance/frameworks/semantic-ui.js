module.exports = {
	css: [ "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.1/semantic.min.css" ],
	button: {
		generator: function( options ) {
			var button = "<button class='ui button " + options.state + options.type +
				" " + options.size + options.color + options.misc + "' >";
			if ( options.icon ) {
				button = button + "<i class='icon " + options.icon + "'></i>";
			}
			return button + " Button </button>";
		},
		variations: {
			state: [
				" active",
				" disabled",
				" loading"
			],
			type: [
				"",
				" basic",
				" inverted"
			],
			icon: [
				"",
				" cloud",
				" underline",
				" left",
				" user"
			],
			size: [
				"",
				" mini",
				" tiny",
				" small",
				" medium"
			],
			color: [
				"",
				" black",
				" yellow",
				" green",
				" blue",
				" orange",
				" purple",
				" red",
				" pink",
				" teal"
			],
			misc: [
				"",
				" compact",
				" circular",
				" fluid",
				" toggle"
			]
		}
	}
};
