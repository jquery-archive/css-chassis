module.exports = function( grunt ) {
return {
	firefox: {
		options: {
			threshold: 0
		},
		urls: ['http://localhost:4200/demos/typography.html'],
		dest: 'tmp/gu.json'
	},
	chrome: {
		options: {
			threshold: 0,
			browser: 'chrome'
		},
		urls: ['http://localhost:4200/demos/typography.html']
	}
};
};
