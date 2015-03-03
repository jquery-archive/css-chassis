module.exports = {
	dev: {
		options: {
			downloadUrl: "https://selenium-release.storage.googleapis.com/2.40/" +
				"selenium-server-standalone-2.40.0.jar",
			downloadLocation: "external/selenium",
			serverOptions: {
				"Dwebdriver.chrome.driver=node_modules/chromedriver/bin/chromedriver": ""
			},
			systemProperties: {}
		}
	}
}