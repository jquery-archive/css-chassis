module.exports = {
	css: [
		"//cdnjs.cloudflare.com/ajax/libs/gumby/2.6.0/css/gumby.min.css",
		"//cdnjs.cloudflare.com/ajax/libs/gumby/2.6.0/fonts/icons/entypo.woff"
	],
	button: {
		generator: function( options ) {
			var button = "<div class='btn " + options.state + options.size + options.style + 
			options.design;
			if (options.iconPosition && options.icon) {
				button += " entypo" + options.iconPosition + options.icon;
			}
			return button + "'><a href='#'>Button</a></div>";
		},
		variations: {
			state: [
				"",
				" primary",
				" secondary",
				" default",
				" info",
				" danger",
				" warning",
				" success",
				" info"
			],
			size: [
				"",
				" xlarge",
				" large",
				" medium",
				" small"
			],
			style: [
				"",
				" oval",
				" rounded",
				" squared",
				" pill-left",
				" pill-right"
			],
			design: [
				"",
				" metro",
				" pretty"
			],
			iconPosition: [
				false,
				" icon-left",
				" icon-right"
			],
			icon: [
				false,
				" icon-camera",
				" icon-mail",
				" icon-user"
			]
		}
	}
};
