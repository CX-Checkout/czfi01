const removeOfferedProducts = require('../../lib/solutions/offerProductsRemover');

exports['return the same array if it don\'t have offers'] = function(test) {
    test.equal(JSON.stringify(removeOfferedProducts([])), JSON.stringify([]));
    test.done();
}

exports['returns an empty array if it has one offer inside'] = function(test) {
    test.equal(JSON.stringify(removeOfferedProducts(['A', 'A', 'A'])), JSON.stringify([]));
    test.done();
}

exports['returns an array with only the unoffered skus'] = function(test) {
    test.equal(JSON.stringify(['A', 'A', 'A', 'C']), JSON.stringify(['C']));
    test.done();
}