module.exports = {
	css: [ "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.1/semantic.min.css" ],
	button: {
		generator: function( options ) {
			var button = "<div class='ui button " + options.size + " " + options.colors + "' >";
			if ( options.icon ) {
				button = button + "<i class='icon " + options.icon + "'></i>";
			}
			return button + " Button </div>";
		},
		variations: {
			state: [
				//"loading",
				"disabled",
				"active"
			],
			types: [
				"basic",
				"inverted"
			],
			social: [
				"facebook",
				"twitter",
				"google plus",
				"vk",
				"linkedin",
				"instagram",
				"youtube"
			],
			icon: [
				"cloud",
				"left",
				"center",
				"right",
				"justify",
				"bold",
				"underline",
				"text width",
				"user"
			],
			size: [
				"mini",
				"tiny",
				"small",
				"medium",
				"large",
				"big",
				"huge",
				"massive"
			],
			colors: [
				"black",
				"yellow",
				"green",
				"blue",
				"orange",
				"purple",
				"red",
				"pink",
				"teal"
			],
			compact: [
				"",
				"compact"
			],
			toggle: [
				"",
				"toggle"
			],
			feedback:[
				"",
				"positive",
				"negative"
				],
			fluid:[
				"",
				"fluid"
			],
			circular:[
				"",
				"circular"
			],
			attached:[
				"",
				"attached",
				"top attached",
				"bottom attached",
				"left attached",
				"right attached"
			]
		}
	}
};
