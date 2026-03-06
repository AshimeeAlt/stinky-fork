'use strict';
/**
 * @module muiflib/es
 */

const {lockns} = require('./ns.cjs').create(module, exports);

exports.global = require('./es/globalThis.cjs');
exports.console = require('./es/console.cjs');
exports.Object = require('./es/Object.cjs');
exports.Array = require('./es/Array.cjs');
exports.JSON = require('./es/JSON.cjs');

const lnullj = require('./lnullj.cjs');
const defineBadExports = (obj, title, exportList) => {
  for (let i = 0; i < exportList.length; ++i) {
    Object.defineProperty(obj, exportList[i], {
      enumerable: true,
      configurable: false,
      get: ((name) => {
        throw new ReferenceError(`Cannot get unimplemented "${name}" property on MUIF ${title} polyfill.`);
      }).bind(lnullj.NULL, exportList[i]),
      set: ((name) => {
        throw new ReferenceError(`Cannot set unimplemented "${name}" property on MUIF ${title} polyfill.`);
      }).bind(lnullj.NULL, exportList[i]),
    });
  }
};

exports.defineBadExports = defineBadExports;

lockns();
