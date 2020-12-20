<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Build

> Guide for building the website.

## Prerequisites

Building the website **requires** the following prerequisites:

-   [Git][git]: version control
-   [GNU make][make]: development utility and task runner
-   [GNU bash][bash]: an sh-compatible shell
-   [Node.js][node-js]: JavaScript runtime (the latest stable version is **strongly** recommended)
-   [npm][npm]: package manager (the latest stable version is **strongly** recommended)
-   [Python][python]: general purpose language (version `>3.7`)

* * *

## Installation

To install dependencies,

```bash
$ npm run install:production
```

* * *

## Build

### API Documentation

To run the entire build sequence sequentially,

```bash
$ npm run build
```

However, you may want to run the following steps in parallel (e.g., in separate terminal windows) in order to expedite the build process. Every step **except** the generation of documentation resources can be executed in parallel.

#### Application

To build the API documentation application,

```bash
$ npm run build:api_docs:app
```

#### HTML Fragments

To build HTML fragments (i.e., convert package READMEs to HTML),

```bash
$ npm run build:api_docs:html_fragments
```

#### Test Bundles

To build package test bundles,

```bash
$ npm run build:api_docs:tests
```

#### Benchmark Bundles

To build package benchmark bundles,

```bash
$ npm run build:api_docs:benchmarks
```

#### Resources

Assuming the above build steps have completed, to generate documentation resources,

```bash
$ npm run build:api_docs:app_resources
```

### CSS

To compile stylesheet bundles,

```bash
$ npm run build:css
```

* * *

## Clean

To remove **all** build artifacts,

```bash
$ npm run clean
```

### API Documentation

To remove API documentation build artifacts,

```bash
$ npm run clean:api_docs:app
```

* * *

## Viewing

To view the website, create a new terminal window and navigate to the `public` folder

```bash
$ cd /path/to/stdlib/www/public
```

and then start a local web server

```bash
$ python -m http.server 9000
```

Once the local web server is running, run

```bash
$ open http://127.0.0.1:9000
```

which will open the website homepage in a local web browser.

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[git]: http://git-scm.com/

[make]: https://www.gnu.org/software/make

[bash]: https://www.gnu.org/software/bash/

[node-js]: https://nodejs.org/en/

[npm]: https://www.npmjs.com/

[python]: https://www.python.org/

</section>

<!-- /.links -->
