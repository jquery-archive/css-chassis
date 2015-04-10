var serverOptions = {},
	binPath = require( "chromedriver" ).path;

serverOptions[ "Dwebdriver.chrome.driver=" + binPath ] = "";

module.exports = {
	dev: {
		options: {
			downloadUrl: "https://selenium-release.storage.googleapis.com/2.45/" +
				"selenium-server-standalone-2.45.0.jar",
			downloadLocation: "node_modules/grunt-selenium-server/",
			serverOptions: serverOptions,
			systemProperties: {}
		}
	}
}
