var checkout = require('../../lib/solutions/checkout');

exports['return -1 for a invalid input'] = function (test) {
    test.equal(checkout(''), -1);
    test.done();
};

exports['returns the price of the product if it pass only one sku'] = function(test) {
    test.equal(checkout('A'), 50);
    test.done();
}

exports['return the sum of all skus it have in the shop if it don\'t have any offer'] = function(test) {
    test.equal(checkout('A,B,C,D'), 115);
    test.done();
}

exports['return -1 if it have an invalid sku in the list'] = function(test) {
    test.equal(checkout('A,H,J'), -1);
    test.done();
}

exports['return the offer price if it have an offer in the list'] = function(test) {
    test.equal(checkout('A,A,A'), 130);
    test.done();
}

// exports['returns the sum of offer price and the product price'] = function(test) {
//     test.equal(checkout('A,A,B,A'), 160);
//     test.done();
// }
