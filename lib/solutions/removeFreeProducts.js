const skusToFreeProducts = [
    {sku: 'E', freeSku: 'B', numberOfProducts: 2},
    {sku: 'F', freeSku: 'F', numberOfProducts: 3}
];

function removeFreeProducts(skusList) {
    let skusWithoutFreeSkus = skusList;
    let numberOfSkusToRemove = 0;
    skusToFreeProducts.forEach((freeOffer) => {
        numberOfElementsToRemove = Math.floor(skusWithoutFreeSkus.filter((sku) => {
            return sku === freeOffer.sku;
        }).length / 2);

        skusWithoutFreeSkus = skusWithoutFreeSkus.filter((sku) => {
            if (sku === freeOffer.sku) {
                numberOfSkusToRemove--;
            }
    
            return sku !== freeOffer.freeSku || (sku === freeOffer.freeSku && (numberOfSkusToRemove + 1) <= 0);
        });
    });
}

module.exports =  removeFreeProducts;