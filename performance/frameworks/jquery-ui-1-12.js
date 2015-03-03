module.exports = {
	css: [ "https://cdn.rawgit.com/arschmitz/5a0c0b61d0240c096db5/raw/0d1d52e3c0e732e0f22cecda2f56def937152db2/jquery-ui-1-12.min.css" ],
	button: {
		generator: function( options ) {
			var icon,
				inline = options.position === "bottom" || options.position === "top",
				first = options.position === "left" || options.position === "top",
				button = "<button class='ui-button ui-widget ui-corner-all";

			if ( options.position === "none" ) {
				button = button + " ui-button-icon-only";
			}
			button = button + "'>";
			if ( options.icon ) {
				icon = "<span class='ui-icon ui-icon-" + options.icon;
				if ( inline ) {
					icon = icon + " ui-icon-display-block";
				}
				icon = icon + "'></span>";
				button = first ? icon + button : button + icon;
			}
			return button + "Button</button>";
		},
		variations: {
			position: [
				"top",
				"bottom",
				"left",
				"right",
				"none"
			],
			icon: [
				false,
				"pencil",
				"clock",
				"disk",
				"mail-closed",
				"heart"
			]
		}
	}
};
