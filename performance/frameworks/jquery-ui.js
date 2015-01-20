module.exports = {
	css: [ "//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.min.css" ],
	button: {
		generator: function( options ) {
			var position,
				button = "<button class='ui-button ui-widget ui-corner-all " + options.state ;
			if ( options.icon ) {
				button = button + " " + options.type;
			}
			button = button + "'>";
			if ( options.icon ) {
				position = /secondary/.test( options.icon ) ? "secondary" : "primary";
				button = button + "<span class='ui-icon ui-icon-" + options.icon +
					" ui-button-icon-" + position + "'></span>";
			}
			return button + "<span class='ui-button-text'>Button<span></button>";
		},
		variations: {
			state: [
				"ui-state-default",
				"ui-state-active",
				"ui-state-focus",
				"ui-state-hover",
				"ui-state-error",
				"ui-state-highlight",
				"ui-state-default"
			],
			type: [
				"ui-button-text-only",
				"ui-button-icon-only",
				"ui-button-text-icon-primary",
				"ui-button-text-icon-secondary",
				"ui-button-text-icons-only"
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
