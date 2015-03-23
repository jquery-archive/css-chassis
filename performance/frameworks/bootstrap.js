module.exports = {
	css: [ "//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" ],
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
				"asterisk",
				"plus",
				"minus",
				"euro",
				"fire"
			]
		}
	}
};
