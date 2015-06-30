module.exports = {
	options: {
		plugins: [
			{
				removeViewBox: false
			},
			{
				removeUselessStrokeAndFill: false
			}
		]
	},
	dist: {
		files: [ {
			expand: true,
			cwd: "icons/svg-source",
			src: [ "*.svg" ],
			dest: "dist/icons/svg-min/",
			ext: ".svg"
		} ]
	}
};
