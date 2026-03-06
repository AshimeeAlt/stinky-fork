'use strict';
/**
 * @module muif
 */

const {lockns} = require('../lib/ns.cjs').create(module, exports);

exports.lib = require('./__lib.cjs');

exports.types = require('../modules/__types.cjs');

exports['default'] = exports;
lockns();
