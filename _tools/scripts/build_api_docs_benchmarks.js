#!/usr/bin/env node

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
var mkdir = require( 'fs' ).mkdirSync;
var exists = require( '@stdlib/fs/exists' ).sync;
var cwd = require( '@stdlib/process/cwd' );
var build = require( '@stdlib/_tools/docs/www/benchmark-bundles' );
var stdlibPath = require( './stdlib_path.js' );
var stdlibVersion = require( './stdlib_version.js' );
var documentationPath = require( './api_docs_path.js' );


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var opts;
	var odir;
	var sdir;
	var cdir;

	cdir = cwd();
	odir = documentationPath();
	if ( !exists( odir ) ) {
		mkdir( odir );
	}
	sdir = stdlibPath();
	opts = {
		'dir': join( sdir, 'lib', 'node_modules' ),
		'mount': '/docs/api/v'+stdlibVersion()+'/',
		'ignore': [
			'benchmark/**',
			'bin/**',
			'build/**',
			'docs/**',
			'etc/**',
			'examples/**',
			'reports/**',
			'scripts/**',
			'test/**',
			'**/_tools/**'
		]
	};
	process.chdir( sdir );
	build( odir, opts, done );

	/**
	* Callback invoked upon completion.
	*
	* @private
	* @param {Error} [err] - error object
	* @throws {Error} unexpected error
	*/
	function done( err ) {
		process.chdir( cdir );
		if ( err ) {
			throw err;
		}
		console.log( 'Finished generating benchmarks.' );
	}
}

main();
