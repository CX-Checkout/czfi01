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

exports['returns the offer price when we have multiple offers in the skus list'] = function(test) {
    test.equal(['A', 'A', 'A','A', 'A', 'A'])
}