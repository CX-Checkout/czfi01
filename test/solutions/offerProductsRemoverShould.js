const removeOfferedProducts = require('../../lib/solutions/offerProductsRemover');

exports['return the same array if it don\'t have offers'] = function(test) {
    test.equal(JSON.stringify(removeOfferedProducts([])), JSON.stringify([]));
    test.done();
}