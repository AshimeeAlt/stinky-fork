'use strict';

const muif = module.exports = require('./exports/__index.cjs');

muif.lib.es.Object.defineProperty(muif.lib.es.global, 'muif', {
  get: () => muif,
  set: () => false,
  configurable: false,
  enumerable: false,
});
