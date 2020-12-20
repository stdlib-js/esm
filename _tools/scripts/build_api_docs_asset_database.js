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
var flattenObject = require( '@stdlib/utils/flatten-object' );
var merge = require( '@stdlib/utils/merge' );
var objectKeys = require( '@stdlib/utils/keys' );
var exists = require( '@stdlib/fs/exists' ).sync;
var replace = require( '@stdlib/string/replace' );
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var documentationPath = require( './api_docs_path.js' );
var tsPath = require( './ts_docs_path.js' );
var root = require( './root.js' );


// VARIABLES //

var OUTPUT = 'package_resources.json';
var TS_SUFFIX = '_docs_types_index_d_.html';
var RE_UNDERSCORE_REPLACE = /[\/-]/g;


// MAIN //

/**
* Main execution sequence.
*
* @private
* @throws {Error} unexpected error
*/
function main() {
	var tspath;
	var dpath;
	var opts;
	var tree;
	var keys;
	var db;
	var k;
	var i;

	// Resolve the API documentation path:
	dpath = documentationPath();

	// Resolve the TypeScript documentation path:
	tspath = tsPath();

	// Load the API documentation package tree:
	opts = {
		'encoding': 'utf8'
	};
	tree = readJSON( join( dpath, 'package_tree.json' ), opts );
	if ( tree instanceof Error ) {
		throw tree;
	}
	// Build an API documentation asset database...
	opts = {
		'delimiter': '/',
		'depth': 0
	};
	db = flattenObject( tree, opts );
	while ( opts.depth <= 6 ) {
		db = merge( db, flattenObject( tree, opts ) );
		opts.depth += 1;
	}
	keys = objectKeys( db );
	for ( i = 0; i < keys.length; i++ ) {
		k = keys[ i ];
		db[ k ] = {
			'benchmark': exists( join( dpath, '@stdlib', k, 'benchmark.html' ) ),
			'test': exists( join( dpath, '@stdlib', k, 'test.html' ) ),
			'typescript': exists( join( tspath, '_' + replace( k, RE_UNDERSCORE_REPLACE, '_' ) + TS_SUFFIX ) )
		}
	}
	// Write the database to file:
	if ( !exists( dpath ) ) {
		mkdir( dpath );
	}
	writeFile( join( dpath, OUTPUT ), JSON.stringify( db ) );
}

main();
