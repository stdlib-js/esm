/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var resolveParentPath = require( '@stdlib/fs/resolve-parent-path' ).sync;
var dirname = require( '@stdlib/utils/dirname' );


// MAIN //

/**
* Synchronously resolves the root project directory.
*
* @private
* @throws {Error} unexpected error
* @returns {string} root directory
*/
function root() {
	var opts;
	var p;

	opts = {
		'dir': __dirname
	};
	p = resolveParentPath( 'package.json', opts );
	if ( p instanceof Error ) {
		throw p;
	}
	return dirname( p );
}


// EXPORTS //

module.exports = root;
