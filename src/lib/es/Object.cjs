'use strict';
/**
 * @module muiflib/es/Object
 */

const {lockns, global} = require('../ns.cjs').create(module, exports);

const Object$create = require('core-js-pure/es/object/create');
const Object$assign = require('core-js-pure/es/object/assign');
const Object$setPrototypeOf = require('core-js-pure/es/object/set-prototype-of');
const Object$getPrototypeOf = require('core-js-pure/es/object/get-prototype-of');
const Object$freeze = require('core-js-pure/es/object/freeze');
const Object$defineProperty = require('core-js-pure/es/object/define-property');
const Object$hasOwn = require('core-js-pure/es/object/has-own');

exports.create = Object$create;
exports.assign = Object$assign;
exports.setPrototypeOf = Object$setPrototypeOf;
exports.getPrototypeOf = Object$getPrototypeOf;
exports.freeze = Object$freeze;
exports.defineProperty = Object$defineProperty;
exports.hasOwn = Object$hasOwn;
exports.REAL = global.Object;

lockns();
