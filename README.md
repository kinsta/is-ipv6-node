# is-ipv6 for Node.js

Check if `String` is an IPv6 address.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![devDependencies Status][devDependencies-status]][devDependencies-url]
[![Travis Build][travis-image]][travis-url]
[![Code Climate][climate-image]][climate-url]

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

[npm-image]: https://img.shields.io/npm/v/is-ipv6-node.svg
[npm-url]: https://npmjs.org/package/is-ipv6-node
[downloads-image]: https://img.shields.io/npm/dm/is-ipv6-node.svg
[downloads-url]: https://npmjs.org/package/is-ipv6-node
[devDependencies-status]: https://david-dm.org/AnatoliyGatt/is-ipv6-node/dev-status.svg
[devDependencies-url]: https://david-dm.org/AnatoliyGatt/is-ipv6-node#info=devDependencies
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/is-ipv6-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/is-ipv6-node
[climate-image]: https://codeclimate.com/github/AnatoliyGatt/is-ipv6-node/badges/gpa.svg
[climate-url]: https://codeclimate.com/github/AnatoliyGatt/is-ipv6-node