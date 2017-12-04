function calculateOfferOfThreeAProducts(sortedSkusList) {
    const productsWithOffer = sortedSkusList.filter((sku) => {
        return sku === 'A';
    });

    if (productsWithOffer.length > 0) {
        const numberOfOffers = Math.ceil(productsWithOffer.length / 3) * 3;
        return 130 * (numberOfOffers / 3);
    }

    return 0;
}

function calculateOfferPrice(skusList) {
    const sortedSkusList = skusList.sort();
    return calculateOfferOfThreeAProducts(sortedSkusList);
    
}

module.exports = calculateOfferPrice;