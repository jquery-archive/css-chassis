module.exports = {
	css: [ "http://localhost:4200/external/bem-components/bem.css" ],
	button: {
		generator: function( options ) {
			var button = "<button class='button button_type_submit button_theme_islands " +
				"button_size_" + options.size + " " + options.togglable +
				" " + options.view + " " + options.disabled + "' >";
			if ( options.icon ) {
				button = button + "<i class='icon icon_" + options.icon +
					" button__control i-bem'  aria-hidden='true' ></i>";
			}
			return button + "<span class='button__text'>Button</span></button>";
		},
		variations: {

			size: [
				"s",
				"m",
				"l",
				"xl"
			],
			togglable: [
				"",
				"button_togglable_check",
				"button_togglable_radio"

			],
			icon: [
				"",
				"social_twitter",
				"social_vk",
				"action_download",
				"action_up",
				"action_down",
				"action_left",
				"action_right"
			],
			view: [
				"",
				"button_view_action",
				"buttpn_view_pseudo"
			],
			disabled: [
				"",
				"button_disabled"
			]

		}
	}
};
