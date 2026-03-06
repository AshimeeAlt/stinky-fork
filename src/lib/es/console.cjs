'use strict';
/**
 * @module muiflib/es/console
 */

const {lockns, global} = require('../ns.cjs').create(module, exports);

const realConsole = global.console;

if (realConsole) {
  exports.log = realConsole.log.bind(realConsole);
  exports.warn = realConsole.warn.bind(realConsole);
  exports.error = realConsole.error.bind(realConsole);
  exports.clear = realConsole.clear.bind(realConsole);
  exports.trace = realConsole.trace.bind(realConsole);
} else {
  const stub = () => ('empty stub', void 0), stubbed = [
    'log',
    'warn',
    'error',
    'clear',
    'trace',
  ];
  for (let i = 0; i < stubbed.length; ++i) {
    exports[stubbed[i]] = stub;
  }
}
exports.REAL = realConsole;

lockns();
