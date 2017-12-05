'use strict';
const calculateOfferPrice = require('./offerCalculator');
const { removeOfferedProducts } = require('./offerProductsRemover');
const removeFreeProducts = require('./removeFreeProducts');

const SkusToPrice = {
    'A' : 50,
    'B' : 30,
    'C' : 20,
    'D' : 15,
    'E' : 40,
    'F' : 10,
    'G' : 20,
    'H' : 10,
    'I' : 35,
    'J' : 60,
    'K' : 80,
    'L' : 90,
    'M' : 15,
    'N' : 40,
    'O' : 10,
    'P' : 50,
    'Q' : 30,
    'R' : 50,
    'S' : 30,
    'T' : 20,
    'U' : 40,
    'V' : 50,
    'W' : 20,
    'X' : 90,
    'Y' : 10,
    'Z' : 50,
};

function skusAreValid(skus) {
    return skus !== '' && allSkusAreInTheList(skus);
}

function calculatePrice(skusList) {
    skusList = removeFreeProducts(skusList);
    let price = calculateOfferPrice(skusList);
    const skusListWithoutOffer = removeOfferedProducts(skusList);
    skusListWithoutOffer.forEach((sku) => {
        price += SkusToPrice[sku];
    });

    return price;
}

function normalizeSkus(skus) {
    return skus.split('');
}

function allSkusAreInTheList(skus) {
    const skusList = normalizeSkus(skus);
    const invalidSkus = skusList.filter((sku) => {
        return typeof SkusToPrice[sku] === 'undefined';
    });

    return invalidSkus.length === 0;
}

module.exports = function (skus) {
    if(skus === '') {
        return 0;
    }
    
    if (!skusAreValid(skus)) {
        return -1;
    }
    
    const skusList = normalizeSkus(skus);
    return calculatePrice(skusList);
};
