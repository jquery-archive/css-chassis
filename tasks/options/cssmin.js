module.exports = {
	options: {
		report: "gzip",
		sourceMap: true
	},
	target: {
		files: {
			"dist/css/chassis.min.css": "dist/css/chassis.css"
		}
	}
};
