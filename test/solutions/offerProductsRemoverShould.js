const { removeOfferedProducts } = require('../../lib/solutions/offerProductsRemover');

exports['return the same array if it don\'t have offers'] = function(test) {
    test.equal(JSON.stringify(removeOfferedProducts([])), JSON.stringify([]));
    test.done();
}

exports['returns an empty array if it has one offer inside'] = function(test) {
    test.equal(JSON.stringify(removeOfferedProducts(['A', 'A', 'A'])), JSON.stringify([]));
    test.done();
}

exports['returns an array with only the unoffered skus'] = function(test) {
    test.equal(JSON.stringify(removeOfferedProducts(['A', 'A', 'A', 'C'])), JSON.stringify(['C']));
    test.done();
}

exports['returns an array with only the unoffered skus when it has more than one offer'] = function(test) {
    test.equal(JSON.stringify(removeOfferedProducts(['A', 'B', 'A', 'B', 'A', 'C', 'A', 'A', 'A'])), JSON.stringify(['C', 'A']));
    test.done();
}

exports['returns a offered product that is not included in the offer pack'] = function(test) {
    test.equal(JSON.stringify(removeOfferedProducts(['A', 'A', 'A', 'A'])), JSON.stringify(['A']));
    test.done();
}

exports['xx'] = function(test) {
    test.equal(JSON.stringify(removeOfferedProducts("AAAAAAAAABBBBCCCDEEEFFF".split('')).sort()), JSON.stringify('ACCCDEEEFFF'.split('')));
    test.done();
}