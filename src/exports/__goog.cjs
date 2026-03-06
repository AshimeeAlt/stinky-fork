'use strict';

module.exports = exports;

exports.goog = require('../lib/goog/goog.cjs').goog;

// Compatibility module for the polypatch closure extension.
exports.polypatch = () => require('../lib/goog/polypatch.cjs');
