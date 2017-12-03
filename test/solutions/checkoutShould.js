var checkout = require('../../lib/solutions/checkout');

exports['return -1 for a invalid input'] = function (test) {
    test.equal(checkout(''), -1);
    test.done();
};

exports['returns the price of the product if we pass only one sku'] = function(test) {
    test.equal(checkout('A'), 50);
    test.done();
}

exports['returns the sum of the all skus if it don\'t have any offer'] = function(test) {
    test.equal(checkout('A,B'), 80);
    test.done();
}
