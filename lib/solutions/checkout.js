'use strict';
const calculateOfferPrice = require('./offerCalculator');
const { removeOfferedProducts } = require('./offerProductsRemover');
const removeFreeProducts = require('./removeFreeProducts');
const { packProducts, numberOfElementsPerPack } = require('./packProducts');
const SkusToPrice = require('./productRepository');

function skusAreValid(skus) {
    return skus !== '' && allSkusAreInTheList(skus);
}

function calculatePrice(skusList) {
    skusList = removeFreeProducts(skusList);
    let skusListWithoutPacks = packProducts(skusList);

    let price = calculateOfferPrice(skusList);
    price += calculatePacksPrice();
    const skusListWithoutOffer = removeOfferedProducts(skusListWithoutPacks);
    price += calculateProductsWithoutOfferPrice(skusListWithoutOffer);

    return price;

    function calculateProductsWithoutOfferPrice(skusListWithoutOffer) {
        let price = 0;
        skusListWithoutOffer.forEach((sku) => {
            price += SkusToPrice[sku];
        });

        return price;
    }

    function calculatePacksPrice() {
        return ((skusList.length - skusListWithoutPacks.length) / 3) * 45;
    }
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