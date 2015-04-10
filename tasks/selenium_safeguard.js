module.exports = function( grunt ) {
	var target,
		seleniumChildProcesses = {};

	// This saves the process so we can attempt to kill it later in the case of a failure
	grunt.event.on( "selenium.start", function( target, process ) {
		grunt.log.ok( "Saw process for target: " +  target );
		seleniumChildProcesses[ target ] = process;
	});

	// This trys to gracefully handle failures and kill the selenium server but its not 100%
	// if this does is not successfull the task will not run again until this has been killed
	grunt.util.hooker.hook( grunt.fail, function() {

		// Clean up selenium if we left it running after a failure.
		grunt.log.writeln( "Attempting to clean up running selenium server." );
		for ( var target in seleniumChildProcesses ) {
			grunt.log.ok( "Killing selenium target: " + target );
			try {
				seleniumChildProcesses[ target ].kill( "SIGTERM" );
			}
			catch ( e ) {

				// This is only if the kill command fails
				grunt.log.warn( "Unable to stop selenium target: " + target );
			}
		}
	});
};