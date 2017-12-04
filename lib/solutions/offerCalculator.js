function calculateOfferOfThreeAProducts(skusList) {
    const productsWithOffer = skusList.filter((sku) => {
        return sku === 'A';
    });

    if (productsWithOffer.length >= 3) {
        const numberOfOffers = Math.ceil(productsWithOffer.length / 3) * 3;
        return 130 * (numberOfOffers / 3);
    }

    return 0;
}

function calculateOfferOfTwoBProducts(skusList) {
    const productsWithOffer = skusList.filter((sku) => {
        return sku === 'B';
    });

    if (productsWithOffer.length >= 2) {
        const numberOfOffers = Math.ceil(productsWithOffer.length / 2) * 2;
        return 45 * (numberOfOffers / 2);
    }

    return 0;
}

function calculateOffer(skusList, offeredSku, minimumQuantityForOffer) {
    
}

function calculateOfferPrice(skusList) {
    return calculateOfferOfThreeAProducts(skusList) + calculateOfferOfTwoBProducts(skusList);
    
}

module.exports = calculateOfferPrice;
