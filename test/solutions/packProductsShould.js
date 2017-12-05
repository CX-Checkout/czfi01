const packProducts = require('../../lib/solutions/packProducts');

exports['return an empty list if we have only one pack'] = function(test) {
    test.equal(JSON.stringify(packProducts(['S', 'T', 'X'])), JSON.stringify([]));
    test.done();
}

exports['return a a new list without the packed products'] = function(test) {
    test.equal(JSON.stringify(packProducts(['S', 'T', 'X', 'A'])), JSON.stringify(['A']));
    test.done();
}