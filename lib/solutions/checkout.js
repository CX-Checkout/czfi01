'use strict';

const SkusToPrice = {
    'A' : 50,
    'B' : 30,
    'C' : 20,
    'D' : 15
};

module.exports = function (skus) {
    
    if (!skusAreValid(skus)) {
        return -1;
    }

    const skusList = normalizeSkusList(skus);
    return calculatePrice(skusList);
};

function skusAreValid(skus) {
    return skus === '';
}

function calculatePrice(skusList) {
    let price = 0;

    skusList.forEach((sku) => {
        price += SkusToPrice[sku];
    });

    return price;
}

function normalizeSkusList(skus) {
    return skus.split(',');
}