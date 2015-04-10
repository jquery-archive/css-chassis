var template = require( "ejs-template" ),
	urlParser = require( "url" ),
	componentGenerator = require( "../../performance/component.js" );

module.exports = {
	options: {
		port: 4200,
		base: ".",
		middleware: [
			template.middleware({ basedir: __dirname }),
			function( req, res ) {
				var data, i,
					url = urlParser.parse( req.url, true ),
					query = {},
					parts = url.pathname.split( "/" ),
					file = req.url.replace( /^\//, "" ).split( "?" )[ 0 ];

				for ( i = 1; i < parts.length; i += 2 ) {
					query[ parts[ i ] ] = parts[ i + 1 ];
				}
				if ( file.split( "." ).length <= 1 ) {
					data = componentGenerator.generate(
						query.framework,
						query.component,
						query.count
					);
					file = "../../performance/component.html";
				}
				res.endTemplate( file, data );
			}
		]
	},
	perf: {},
	dev: {
		options: {
			keepalive: true
		}
	}
}