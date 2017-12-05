const freeProductOffers = [
    {sku: 'E', freeSku: 'B', numberToRemove: 2},
    {sku: 'F', freeSku: 'F', numberToRemove: 3},
]

function removeFreeProducts(skusList) {
    let freeProducts = [].concat(skusList);
    freeProductOffers.forEach((freeProductOffer) => {
        freeProducts = removeOfferedFreeProducts(freeProducts, freeProductOffer)
    });
    // freeProducts = removeOfferedFreeProducts(freeProducts, freeProductOffers[1]);
    return freeProducts;
}

function removeOfferedFreeProducts(skusList, freeProductOffer) {
    let numberOfSkusToRemove = Math.floor(skusList.filter((sku) => {
        return sku === freeProductOffer.sku;
    }).length / freeProductOffer.numberToRemove);

    return skusList.filter((sku) => {
        if (sku === freeProductOffer.freeSku) {
            numberOfSkusToRemove--;
        }
        return sku !== freeProductOffer.freeSku || (sku === freeProductOffer.freeSku && (numberOfSkusToRemove + 1) <= 0);
    });
}

module.exports =  removeFreeProducts;