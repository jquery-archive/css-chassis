module.exports = {
	defaults: {
		options: {

			// This will prefix each ID
			prefix: "icon-",

			// Adds attributes to the resulting SVG
			svg: {
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			},
			cleanup: [ "style", "fill", "id" ]
		},
		files: {
			"icons/icons.svg": [ "icons/svg-min/*.svg" ]
		}
	}
};
