module.exports = {
	css: [ "/bower_components/jquery-mobile/css/themes/default/jquery.mobile.css" ],
	button: {
		generator: function( options ) {
			var position = ( options.icon === "" ) ? "" : options.iconPosition;
			return "<button class='ui-btn" +
				options.options +
				options.theme +
				position +
				options.icon +
				"'>Button</button>";
		},
		variations: {
			theme: [
				" ui-btn-a",
				" ui-btn-b",
				" ui-state-disabled ui-btn-a",
				" ui-state-disabled ui-btn-b"
			],
			options: [
				" ui-btn-inline ui-mini",
				" ui-btn-inline ui-corner-all",
				" ui-btn-inline ui-shadow",
				" ui-btn-inline",
				" ui-corner-all ui-shadow",
				" ui-corner-all ui-shadow ui-btn-inline",
				" ui-corner-all ui-shadow ui-mini ui-btn-inline"
			],
			iconPosition: [
				" ui-btn-icon-left",
				" ui-btn-icon-top",
				" ui-btn-icon-bottom",
				" ui-btn-icon-right"
			],
			icon: [
				"",
				" ui-icon ui-icon-bars",
				" ui-icon ui-icon-bullets",
				" ui-icon ui-icon-camera",
				" ui-icon ui-icon-audio",
				" ui-icon ui-icon-cloud"
			]
		}
	}
};
