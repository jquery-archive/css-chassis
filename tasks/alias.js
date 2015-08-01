module.exports = function( grunt ) {
grunt.registerTask( "default", [ "test" ] );
grunt.registerTask( "accessibility", [ "connect:accessibility", "axe-webdriver"])
grunt.registerTask( "test", [ "build", "jshint", "jscs", "csslint", "accessibility" ] );
grunt.registerTask( "build", [ "buildVariables", "svg", "sass", "csscomb", "cssmin" ] );
grunt.registerTask( "perf", [
	"start-selenium-server",
	"connect:perf",
	"perfjankie",
	"stop-selenium-server"
]);
grunt.registerTask( "svg", [ "svgmin", "svgstore" ] );
};
