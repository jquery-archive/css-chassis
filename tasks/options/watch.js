module.exports = {
	sass: {
		files: [ "scss/**/*.scss", "scss/variables/**/*.js" ],
		tasks: [ "build" ],
		options: {
			spawn: true
		}
	},
	svg: {
		files: [ "svg-source/**/*.svg" ],
		tasks: [ "svg" ],
		options: {
			spawn: false
		}
	}
};
