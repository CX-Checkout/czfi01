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

    const skusList = normalizeSkus(skus);
    return calculatePrice(skusList);
};

function skusAreValid(skus) {
    return skus !== '' && allSkusAreInTheList(skus);
}

function calculatePrice(skusList) {
    let price = 0;

    skusList.forEach((sku) => {
        price += SkusToPrice[sku];
    });

    return price;
}

function normalizeSkus(skus) {
    return skus.split(',');
}

function allSkusAreInTheList(skus) {
    const skusList = normalizeSkus(skus);
    skusList.filter((sku) => {
        return typeof SkusToPrice[sku] === 'undefined';
    });

    return skusList.length === 0;
}