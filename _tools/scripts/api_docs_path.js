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
var root = require( './root.js' );
var version = require( './stdlib_version.js' );


// MAIN //

/**
* Returns the API documentation path.
*
* @private
* @returns {string} API documentation path
*/
function path() {
	return join( root(), 'public', 'docs', 'api', 'v'+version() );
}


// EXPORTS //

module.exports = path;
