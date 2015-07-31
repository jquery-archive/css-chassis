module.exports = function prefixer( object, prefix ) {
var key, val, temp = {};
var k, newObj = {};
prefix = typeof( prefix ) === "undefined" ? "" : prefix + "-";
for ( key in object ) {
	if ( object.hasOwnProperty( key ) ) {
		if ( typeof( object[key] ) === "object" && !object[key].hasOwnProperty( "value" ) ) {
			temp =   prefixer( object[ key ], key );
			for ( k in temp ) {
				if ( temp.hasOwnProperty( k ) ) {
					newObj[ prefix + k ] = temp[ k ];
				}
			}
		} else {
			newObj[ prefix + key ] = object[ key ];
		}
	}
}

return newObj;
};
