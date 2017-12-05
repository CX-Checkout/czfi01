var removeFreeProducts = require('../../lib/solutions/removeFreeProducts');

exports['remove one B if we have two E'] = function(test) {
    test.equal(removeFreeProducts(['B', 'E', 'E']), ['E', 'E']);
    test.done();
}