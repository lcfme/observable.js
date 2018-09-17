const ObserveX = require('./');

const _ObserveX = ObserveX.default;

Object.keys(ObserveX).forEach(m => {
    if (m === 'default') return;
    _ObserveX[m] = ObserveX[m];
});

module.exports = _ObserveX;
