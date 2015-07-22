module.exports = function( grunt ) {
grunt.registerTask( "default", [ "test" ] );
grunt.registerTask( "test", [ "build", "jshint", "jscs", "csslint" ] );
grunt.registerTask( "build", [ "variables", "svg", "sass", "csscomb", "cssmin" ] );
grunt.registerTask( "perf", [
	"start-selenium-server",
	"connect:perf",
	"perfjankie",
	"stop-selenium-server"
]);
grunt.registerTask( "svg", [ "svgmin", "svgstore" ] );
};
