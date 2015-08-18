# is-ipv6 for Node.js

Check if `String` is an IPv6 address.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![devDependencies Status][devDependencies-status-badge]][devDependencies-status-page-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]
[![Code Climate Status][code-climate-status-badge]][code-climate-status-page-url]

## Installation

`npm install is-ipv6-node`

## Usage Example

```javascript
var isIPv6 = require("is-ipv6-node");

console.log(isIPv6("2a02:2770::21a:4aff:feb3:2ee"));
console.log(isIPv6("Hello World!"));
```

***

```javascript
true
false
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-package-version-badge]: https://img.shields.io/npm/v/is-ipv6-node.svg?style=flat-square
[npm-package-downloads-badge]: https://img.shields.io/npm/dm/is-ipv6-node.svg?style=flat-square
[npm-package-url]: https://npmjs.org/package/is-ipv6-node
[devDependencies-status-badge]: https://david-dm.org/AnatoliyGatt/is-ipv6-node/dev-status.svg?style=flat-square
[devDependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/is-ipv6-node#info=devDependencies
[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/is-ipv6-node.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/is-ipv6-node
[code-climate-status-badge]: https://codeclimate.com/github/AnatoliyGatt/is-ipv6-node/badges/gpa.svg?style=flat-square
[code-climate-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/is-ipv6-node