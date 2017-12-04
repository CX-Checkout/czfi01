var checkout = require('../../lib/solutions/checkout');

exports['return -1 for a invalid input'] = function (test) {
    test.equal(checkout(''), 0);
    test.done();
};

exports['returns the price of the product if it pass only one sku'] = function(test) {
    test.equal(checkout('A'), 50);
    test.done();
}

exports['return the sum of all skus it have in the shop if it don\'t have any offer'] = function(test) {
    test.equal(checkout('ABCD'), 115);
    test.done();
}

exports['return -1 if it have an invalid sku in the list'] = function(test) {
    test.equal(checkout('AHJ'), -1);
    test.done();
}

exports['return the offer price if it have an offer in the list'] = function(test) {
    test.equal(checkout('AAA'), 130);
    test.done();
}

exports['returns the sum of offer price and the product price'] = function(test) {
    test.equal(checkout('AABA'), 160);
    test.done();
}

exports['returns a price of a checkout with multiple offers and products without offer'] = function(test) {
    test.equal(checkout('AAABBC'), 195);
    test.done();
}

exports['returns a price of checkout with all the products with offer but one is outside the pack'] = function(test) {
    test.equal(checkout('AAAA'), 180);
    test.done();
}

exports['returns the price of this skus with multiple offers and multiple skus without offers'] = function(test) {
    test.equal(checkout('ABCDCBAABCABBAAA'), 505);
    test.done();
}