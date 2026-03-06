'use strict';
/**
 * @module muiflib/es/globalThis
 */
module.exports;

try {
  module.exports = global;
} catch(_error) {
  try {
    module.exports = globalThis;
  } catch(_error) {
    try {
      module.exports = self;
    } catch(_error) {
      module.exports = window;
    }
  }
}
