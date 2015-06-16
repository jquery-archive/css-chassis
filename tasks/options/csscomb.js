module.exports = {
	dist: {
		files: {
			"dist/css/chassis.css": "dist/css/chassis.css"
		}
	},
	scss: {
		files: [ {
			expand: true,
			src: [ "scss/**/*.scss" ]
		} ]
	}
};