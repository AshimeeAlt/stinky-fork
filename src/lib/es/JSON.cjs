'use strict';
/**
 * @module muiflib/es/JSON
 */

const {lockns, global} = require('../ns.cjs').create(module, exports);

const JSON$parse = require('core-js-pure/es/json/parse');
const JSON$stringify = require('core-js-pure/es/json/stringify');

exports.parse = JSON$parse;
exports.stringify = JSON$stringify;
exports.REAL = global.JSON;

lockns();
