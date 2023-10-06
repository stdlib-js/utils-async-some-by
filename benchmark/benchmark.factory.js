/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib/factory.js' );


// MAIN //

bench( pkg+':factory', function benchmark( b ) {
	var someByAsync;
	var arr;
	var i;

	arr = [ 1, 2, 3, 4, 5 ];

	function predicate( value, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, false );
		}
	}

	someByAsync = factory( predicate );

	i = 0;
	b.tic();

	return next();

	function next( error ) {
		i += 1;
		if ( error ) {
			b.fail( 'should not return an error' );
		}
		if ( i <= b.iterations ) {
			return someByAsync( arr, 2, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});
