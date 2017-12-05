const freeProductOffers = [
    {sku: 'E', freeSku: 'B', numberToRemove: 2},
    {sku: 'F', freeSku: 'F', numberToRemove: 3},
    {sku: 'N', freeSku: 'M', numberToRemove: 3},
    {sku: 'R', freeSku: 'Q', numberToRemove: 3},
    {sku: 'U', freeSku: 'U', numberToRemove: 4},
]

function removeFreeProducts(skusList) {
    let skusListWithoutFreeProducts = [].concat(skusList);
    freeProductOffers.forEach((freeProductOffer) => {
        skusListWithoutFreeProducts = removeOfferedFreeProducts(skusListWithoutFreeProducts, freeProductOffer)
    });
    return skusListWithoutFreeProducts;
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

