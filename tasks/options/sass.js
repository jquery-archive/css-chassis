module.exports = {
	dist: {
		options: {
			sourceMap: true,

			// This actually does nested until libsass updates to support expanded
			outputStyle: "expanded"
		},
		files: {
			"dist/css/chassis.css": "scss/style.scss"
		}
	}
};