module.exports = function( grunt ) {
grunt.registerTask( "default", [ "test" ] );
grunt.registerTask( "accessibility_all", [ "connect:accessibility", "axe-webdriver"])
grunt.registerTask( "accessibility", [ "connect:accessibility", "axe-webdriver:firefox"])
grunt.registerTask( "test", [ "build", "jshint", "jscs", "csslint", "accessibility" ] );
grunt.registerTask( "build", [ "variables", "svg", "sass", "csscomb", "cssmin" ] );
grunt.registerTask( "perf", [
	"start-selenium-server",
	"connect:perf",
	"perfjankie",
	"stop-selenium-server"
]);
grunt.registerTask( "svg", [ "svgmin", "svgstore" ] );
};
