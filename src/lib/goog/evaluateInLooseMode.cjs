const muif = require('../../pure.cjs');
const global = require('../es/globalThis.cjs');

if (muif.process_env_WEBPACK) {
  const muif$closureloader$evaluateInLooseMode = (code, globally) => {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = `(this || self).muif$closureloader$evaluateInLooseMode = () => (0, void ${globally ? '(this || self).' : ''}eval(${JSON.stringify(code)}));`;
    document.body.appendChild(script);
    global.muif$closureloader$evaluateInLooseMode();
    delete global.muif$closureloader$evaluateInLooseMode;
  };
  module.exports = muif$closureloader$evaluateInLooseMode;
} else {
  const muif$closureloader$evaluateInLooseMode = (code) => void require(/* webpackIgnore: true */'vm').runInThisContext.call(global, code, '');
  module.exports = muif$closureloader$evaluateInLooseMode;
}
