'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (skus === '') {
        return -1;
    }
    let price = 0;
    const skusList = normalizeSkusList(skus);
    price = calculatePrice(skusList, price);
    

    return price;
};

function calculatePrice(skusList, price) {
    skusList.forEach((sku) => {
        if (sku === 'A') {
            price += 50;
        }
        if (sku === 'B') {
            price += 30;
        }
    });
    return price;
}

function normalizeSkusList(skus) {
    return skus.split(',');
}