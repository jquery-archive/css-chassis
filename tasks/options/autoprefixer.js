module.exports = {
	dist: {
		options: {
			map: true,
			browsers: [
				"> 1%",
				"last 2 versions",
				"safari >= 5.1",
				"ios >= 6.1",
				"android 2.3",
				"android >= 4",
				"ie >= 8"
			]
		},
		src: "dist/css/*.css"
	}
};
