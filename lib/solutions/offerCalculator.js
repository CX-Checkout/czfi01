function calculateOfferOfThreeAProducts(sortedSkusList) {
    const offeredProducts = sortedSkusList.filter((sku) => {
        return sku === 'A';
    });

    if (numberOfOfferedProducts.length > 0) {
        const numberOfOffers = Math.ceil(numberOfOfferedProducts.length / 3) * 3;
        return 130 * numberOfOffers;
    }

    return 0;
}

function calculateOfferPrice(skusList) {
    const sortedSkusList = skusList.sort();
    return calculateOfferOfThreeAProducts(sortedSkusList);
    
}

module.exports = calculateOfferPrice;