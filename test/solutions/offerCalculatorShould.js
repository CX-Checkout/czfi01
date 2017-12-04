const calculateOfferPrice = require('../../lib/solutions/offerCalculator');

exports['return 0 if skus list don\'t have any offer'] = function(test) {
    test.equal(calculateOfferPrice([]), 0);
    test.done();
}

exports['returns the offer price if we have any offer in the skus list'] = function(test) {
       
}