const {packProducts} = require('../../lib/solutions/packProducts');

exports['return an empty list if we have only one pack'] = function(test) {
    test.equal(JSON.stringify(packProducts(['S', 'T', 'X'])), JSON.stringify([]));
    test.done();
}

exports['returns a list with one product if we have one pack and one product'] = function(test) {
    test.equal(JSON.stringify(packProducts(['S', 'T', 'X', 'A'])), JSON.stringify(['A']));
    test.done();
}

exports['returns a empty list if we have two packs inside'] = function(test) {
    test.equal(JSON.stringify(packProducts(['S', 'T', 'X', 'S', 'T', 'X'])), JSON.stringify([]));
    test.done();
}