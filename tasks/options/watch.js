module.exports = {
	sass: {
		files: [ "scss/**/*.scss" ],
		tasks: [ "build" ],
		options: {
			spawn: false
		}
	},
	svg: {
		files: [ "svg-source/**/*.svg" ],
		tasks: [ "svg" ],
		options: {
			spawn: false
		}
	},
	jsassvars: {
		files: [ "scsss/variables/**/*.js" ],
		tasks: [ "build" ],
		options: {
			spawn: true
		}
	}

};
