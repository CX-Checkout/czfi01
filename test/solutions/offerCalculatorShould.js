const calculateOfferPrice = require('../../lib/solutions/offerCalculator');

exports['return 0 if skus list don\'t have any offer'] = function(test) {
    test.equal(calculateOfferPrice([]), 0);
    test.done();
}

exports['returns the offer price if we have any offer in the skus list'] = function(test) {
    test.equal(calculateOfferPrice(['A', 'A', 'A']), 130);
    test.done();   
}

exports['returns the offer price if we have any offer in the skus list with products with no offer'] = function(test) {
    test.equal(calculateOfferPrice(['B', 'A', 'C', 'A', 'A']), 130);
    test.done();
}

exports['returns the offer price when we have multiple offers with the same product in the skus list'] = function(test) {
    test.equal(calculateOfferPrice(['A', 'A', 'A','A', 'A', 'A']), 260);
    test.done();
}

exports['return the offer price when we have multiple offers with different products in the skus list'] = function(test) {
    test.equal(calculateOfferPrice(['A', 'A', 'B', 'B', 'A','A', 'A', 'A']), 305);
    test.done();
}

exports['return the offer price when we have multiple offers with different products and products without offer in the skus list'] = function(test) {
    test.equal(calculateOfferPrice(['A', 'A', 'B', 'B', 'A','A', 'A', 'A', 'C']), 305);
    test.done();
}