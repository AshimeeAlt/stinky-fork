'use strict';
/**
 * @module muiflib/es/Array
 */

const {lockns, global} = require('../ns.cjs').create(module, exports);

const Array$isArray = require('core-js-pure/es/array/is-array');

exports.isArray = Array$isArray;
exports.REAL = global.Array;

lockns();
