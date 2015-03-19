var flyd = require('flyd');

module.exports = function(s, f) {
  return flyd.stream([s], function(own) {
    flyd.map(f(s.val), own);
  });
};
