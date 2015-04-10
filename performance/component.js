var components = {
		generate: function( frameworkName, component, count ) {
			var currentCount = 0,
				framework = require( "./frameworks/" + frameworkName + ".js" ),
				keys = Object.keys( framework[ component ].variations ),
				current = {},
				html = "";

			function render( i ) {
				framework[ component ].variations[ keys[ i ] ].forEach(function( value ) {
					current[ keys[ i ] ] = value;
					if ( i < keys.length - 1 ) {
						render( i + 1 );
					} else {
						if ( currentCount < count ) {
							currentCount++;
							html = html + framework[ component ].generator.call( this, current );
						}
					}
				});
			}
			while ( currentCount < count ) {
				render( 0 );
			}
			return {
				html: html,
				count: currentCount,
				css: framework.css,
				title: frameworkName + ": " + component
			};
		}
	};
module.exports =  components;
