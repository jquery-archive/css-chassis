module.exports = {
	dist: {
		options: {
			sourceMap: true,

			// This actually does nested until libsass updates to support expanded
			outputStyle: "expanded"
		},
		files: {
			"dist/css/chassis-ltr.css": "scss/style.scss",
			"dist/css/chassis-rtl.css": "scss/style-rtl.scss"
		}
	}
};
