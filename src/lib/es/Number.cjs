'use strict';
/**
 * @module muiflib/es/Number
 */

const {lockns, global} = require('../ns.cjs').create(module, exports);

const Number$isFinite = require('core-js-pure/es/number/is-finite');

exports.isFinite = Number$isFinite;
exports.REAL = global.Number;

lockns();
