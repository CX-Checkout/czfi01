'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (skus === '') {
        return -1;
    }
    let price = 0;
    skus.split(',').forEach((sku) => {
        if (sku === 'A') {
            price += 50;
        }

        if(sku === 'B') {
            price += 30;
        }
    });
    

    return price;
};
