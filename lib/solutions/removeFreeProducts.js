function removeFreeProducts(skusList) {
    let skusListWithoutFreeSkus = removeOfferOfFreeBWithEveryTwoE(skusList);
    return removeOfferOfFreeFWithEveryTwoF(skusListWithoutFreeSkus);
}

function removeOfferOfFreeBWithEveryTwoE(skusList) {
    let numberOfBToRemove = Math.floor(skusList.filter((sku) => {
        return sku === 'E';
    }).length / 2);
    return skusList.filter((sku) => {
        if (sku === 'B') {
            numberOfBToRemove--;
        }
        return sku !== 'B' || (sku === 'B' && (numberOfBToRemove + 1) <= 0);
    });
}

function removeOfferOfFreeFWithEveryTwoF(skusList) {
    let numberOfBToRemove = Math.floor(skusList.filter((sku) => {
        return sku === 'F';
    }).length / 3);

    return skusList.filter((sku) => {
        if (sku === 'F') {
            numberOfBToRemove--;
        }

        return sku !== 'F' || (sku === 'F' && (numberOfBToRemove + 1) <= 0);
    });
}


module.exports =  removeFreeProducts;