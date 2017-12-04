var checkout = require('../../lib/solutions/checkout');

exports['return -1 for a invalid input'] = function (test) {
    test.equal(checkout(''), -1);
    test.done();
};

exports['returns the price of the product if we pass only one sku'] = function(test) {
    test.equal(checkout('A'), 50);
    test.done();
}

exports['return the sum of all skus we have in our shop if it don\'t have any offer'] = function(test) {
    test.equal(checkout('A,B,C,D'), 115);
    test.done();
}
