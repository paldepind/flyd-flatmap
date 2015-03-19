var flyd = require('flyd');

module.exports = function(s, f) {
  var ns = flyd.stream();
  flyd.map(s, function(v) {
    flyd.map(f(v), ns);
  });
  return ns;
};
