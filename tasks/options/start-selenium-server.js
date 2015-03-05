module.exports = {
	dev: {
		options: {
			downloadUrl: "https://selenium-release.storage.googleapis.com/2.45/" +
				"selenium-server-standalone-2.45.0.jar",
			downloadLocation: "external/selenium",
			serverOptions: {
				"Dwebdriver.chrome.driver=node_modules/chromedriver/bin/chromedriver": ""
			},
			systemProperties: {}
		}
	}
}