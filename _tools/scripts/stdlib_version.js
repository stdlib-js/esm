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

var join = require( 'path' ).join;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var stdlibPath = require( './stdlib_path.js' );


// MAIN //

/**
* Synchronously resolves the currently installed `@stdlib/stdlib` version.
*
* @private
* @throws {Error} unexpected error
* @returns {string} package version
*/
function version() {
	var opts;
	var pdir;
	var pkg;

	// Resolve the `@stdlib/stdlib` installation directory:
	pdir = stdlibPath();

	// Read the `package.json`:
	opts = {
		'encoding': 'utf8'
	};
	pkg = readJSON( join( pdir, 'package.json' ), opts );
	if ( pkg instanceof Error ) {
		throw pkg;
	}
	if ( pkg.name !== '@stdlib/stdlib' ) {
		// Somehow we did not resolve the `package.json` file for `@stdlib/stdlib`...
		throw new Error( 'unexpected error. Unexpected package name. Name: `'+pkg.name+'`.' );
	}
	return pkg.version;
}


// EXPORTS //

module.exports = version;
