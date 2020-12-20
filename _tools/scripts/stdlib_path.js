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

var resolve = require( 'resolve' ).sync;
var resolveParentPath = require( '@stdlib/fs/resolve-parent-path' ).sync;
var dirname = require( '@stdlib/utils/dirname' );
var root = require( './root.js' );


// MAIN //

/**
* Synchronously resolves the currently installed `@stdlib/stdlib` path.
*
* @private
* @throws {Error} unexpected error
* @returns {string} package path
*/
function path() {
	var opts;
	var main;
	var pdir;

	// Resolve the main `@stdlib/stdlib` entry point:
	opts = {
		'basedir': root()
	};
	main = resolve( '@stdlib/stdlib' );

	// Resolve the `package.json`:
	opts = {
		'dir': dirname( main )
	};
	pdir = resolveParentPath( 'package.json', opts );
	if ( pdir instanceof Error ) {
		throw pdir;
	}
	// Return the package path:
	return dirname( pdir );
}


// EXPORTS //

module.exports = path;
