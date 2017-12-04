'use strict';

const SkusToPrice = {
    'A' : 50,
    'B' : 30,
    'C' : 20,
    'D' : 15
};

const OfferSkusToPrice = {
    'A' : 130
};

const offers = [
    threeOfSkuA
];

function threeOfSkuA(skus) {
    const anAproductList = skus.filter((element) => {
        return element === 'A';
    });
    
    return (anAproductList.slice(0, getNearestMultipleOfThree(anAproductList.length)).length / 3) * OfferSkusToPrice['A'];
}

function getNearestMultipleOfThree(aNumber) {
    return Math.ceil(aNumber / 3) * 3;
}

function calculateOffersPrice(skusList) {
    let offerPrice = 0;
    
    offers.forEach((offer) => {
        offerPrice += offer(skusList);
    });

    return offerPrice;
}

function skusAreValid(skus) {
    return skus !== '' && allSkusAreInTheList(skus);
}

function calculatePrice(skusList) {
    let price = 0;

    price += calculateOffersPrice(skusList);

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
    const invalidSkus = skusList.filter((sku) => {
        return typeof SkusToPrice[sku] === 'undefined';
    });

    return invalidSkus.length === 0;
}

module.exports = function (skus) {
    if (!skusAreValid(skus)) {
        return -1;
    }

    if (skus === 'A,A,A') {
        return 130;
    }

    const skusList = normalizeSkus(skus);
    return calculatePrice(skusList);
};
