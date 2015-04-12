module.exports = {
	options: {
		suite: "perfSlides - Performance Analysis"
	},
	"comparison": {
		options: {
			repeat: 2,
			selenium: {
				hostname: "localhost",
				port: "4444"
			},
			browsers: [
				"chrome",
				"firefox"
			],
			couch: {
				server: "http://localhost:5984",
				database: "css-performance",
				updateSite: true
			},
			urls: [
				"http://localhost:4200/framework/foundation/component/button/count/1000/" +
					"foundation:button",
				"http://localhost:4200/framework/jquery-mobile/component/button/count/1000/" +
					"jquery-mobile:button",
				"http://localhost:4200/framework/jquery-ui/component/button/count/1000/" +
					"jquery-ui:button",
				"http://localhost:4200/framework/jquery-ui-1-12/component/button/count/1000/" +
					"jquery-ui-1-12:button",
				"http://localhost:4200/framework/bootstrap/component/button/count/1000/" +
					"bootstrap:button",
				"http://localhost:4200/framework/topcoat/component/button/count/1000/" +
					"topcoat:button",
				"http://localhost:4200/framework/topcoat-mobile/component/button/count/1000/" +
					"topcoat-mobile:button",
				"http://localhost:4200/framework/semantic-ui/component/button/count/1000/" +
					"semantic-ui:button",
				"http://localhost:4200/framework/dojo/component/button/count/1000/" +
					"dojo:button",
				"http://localhost:4200/framework/topcoat/component/checkbox/count/1000/" +
					"topcoat:checkbox-widget",
				"http://localhost:4200/framework/topcoat-mobile/component/checkbox/count/1000/" +
					"topcoat-mobile:checkbox-widget",
				"http://localhost:4200/framework/semantic-ui/component/checkbox/count/1000/" +
					"semantic-ui:checkbox-widget",
				"http://localhost:4200/framework/dojo/component/checkbox/count/1000/" +
					"dojo:checkbox-widget",
				"http://localhost:4200/framework/jquery-ui-1-12/component/checkbox/count/1000/" +
					"jquery-ui-1-12:checkbox-widget"
			]
		}
	}
}
