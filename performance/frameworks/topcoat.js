module.exports = {
	css: [
		"/external/topcoat/css/topcoat-desktop-dark.css",
		"/external/topcoat-icons/font/icomatic.css"
	],
	button: {
		generator: function( options ) {
			var button = "<button class='",
			buttonText = options.type ? "" : " Button",
			buttonClass = "topcoat" + options.type + "-button" + options.size,
			icon = "",
			iconClass = "topcoat-icon";

			// Add icon only if it is a icon-button or there is an icon set
			if ( options.icon || options.type ) {

				// Icon butons donot support cta type
				if ( !options.type || options.state !== "--cta" ) {
					buttonClass += options.state;
				}

				// If it is an icon button, add size to class
				if ( options.type ) {
					iconClass += options.size;
				}
				icon = "<span class='" + iconClass + " icomatic'>" + options.icon +
					"</span>";
			}

			return button + buttonClass + "'>" + icon + buttonText + "</button>";
		},
		variations: {
			type: [
				"",
				"-icon"
			],
			size: [
				"",
				"--large"
			],
			state: [
				"",
				"--cta",
				"--quiet"

			],
			icon: [
				"",
				"location",
				"home",
				"alert"
			]

		}
	}
};
