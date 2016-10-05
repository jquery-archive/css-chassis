module.exports = {

	// This is everything including normalize.css see lint below for explanation
	dist: {
		options: {
			sourceMap: true,

			// This actually does nested until libsass updates to support expanded
			outputStyle: "expanded"
		},
		files: {
			"dist/css/chassis.css": "scss/style.scss"
		}
	},

	// This is everything except normalize.css as normalize won't pass our lint settings
	lint: {
		options: {
			sourceMap: true,

			// This actually does nested until libsass updates to support expanded
			outputStyle: "expanded"
		},
		files: {
			"dist/css/chassis.lint.css": "scss/lint.scss"
		}
	}
};
