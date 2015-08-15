module.exports = {
	css: [ "/bower_components/bootstrap/css/bootstrap.min.css" ],
	button: {
		generator: function( options ) {
			var button = "<button class='btn " + options.state + " " + options.size + "' >";
			if ( options.icon ) {
				button = button + "<span class='glyphicon glyphicon-" + options.icon +
					"'></span>";
			}
			return button + " Button </button>";
		},
		variations: {
			state: [
				"btn-default",
				"btn-primary",
				"btn-success",
				"btn-info",
				"btn-warning",
				"btn-danger",
				"btn-link"
			],
			size: [
				"",
				"btn-lg",
				"btn-sm",
				"btn-xs"
			],
			icon: [
				false,
				"astrisk",
				"plus",
				"minus",
				"euro",
				"fire"
			]
		}
	}
};
