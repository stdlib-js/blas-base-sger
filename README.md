<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sger

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform the rank 1 operation `A = α*x*y^T + A`.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import sger from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sger@esm/index.mjs';
```

#### sger( order, M, N, α, x, sx, y, sy, A, lda )

Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float32Array( [ 1.0, 1.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );

sger( 'row-major', 2, 3, 1.0, x, 1, y, 1, A, 3 );
// A => <Float32Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in the matrix `A`.
-   **N**: number of columns in the matrix `A`.
-   **α**: scalar constant.
-   **x**: an `M` element [`Float32Array`][mdn-float32array].
-   **sx**: stride length for `x`.
-   **y**: an `N` element [`Float32Array`][mdn-float32array].
-   **sy**: stride length for `y`.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **lda**: stride of the first dimension of `A` (leading dimension of `A`).

The stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to iterate over every other element in `x` and `y`,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );
var x = new Float32Array( [ 1.0, 0.0, 1.0, 0.0 ] );
var y = new Float32Array( [ 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] );

sger( 'column-major', 2, 3, 1.0, x, 2, y, 2, A, 2 );
// A => <Float32Array>[ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 1.0, 1.0 ] );
var y0 = new Float32Array( [ 0.0, 1.0, 1.0, 1.0 ] );
var A = new Float32Array( [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

sger( 'column-major', 2, 3, 1.0, x1, -1, y1, -1, A, 2 );
// A => <Float32Array>[ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

#### sger.ndarray( M, N, α, x, sx, ox, y, sy, oy, A, sa1, sa2, oa )

Performs the rank 1 operation `A = α*x*y^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float32Array( [ 1.0, 1.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );

sger.ndarray( 2, 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
// A => <Float32Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function has the following additional parameters:

-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 0.0, 0.0, 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );
var x = new Float32Array( [ 0.0, 1.0, 0.0, 1.0, 0.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] );

sger.ndarray( 2, 3, 1.0, x, 2, 1, y, 2, 1, A, 1, 2, 2 );
// A => <Float32Array>[ 0.0, 0.0, 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sger()` corresponds to the [BLAS][blas] level 2 function [`sger`][blas-sger].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import sger from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sger@esm/index.mjs';

var opts = {
    'dtype': 'float32'
};

var M = 3;
var N = 5;

var A = discreteUniform( M*N, 0, 255, opts );
var x = discreteUniform( M, 0, 255, opts );
var y = discreteUniform( N, 0, 255, opts );

sger( 'row-major', M, N, 1.0, x, 1, y, 1, A, N );
console.log( A );

sger.ndarray( M, N, 1.0, x, 1, 0, y, 1, 0, A, 1, M, 0 );
console.log( A );


</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-sger.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-sger

[test-image]: https://github.com/stdlib-js/blas-base-sger/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-sger/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-sger/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-sger?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-sger.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-sger/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-sger/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-sger/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-sger/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-sger/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-sger/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-sger/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-sger/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-sger/main/LICENSE

[blas]: http://www.netlib.org/blas

[blas-sger]: https://www.netlib.org/lapack/explore-html/d8/d75/group__ger_ga95baec6bb0a84393d7bc67212b566ab0.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
