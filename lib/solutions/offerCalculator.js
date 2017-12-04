function calculateOfferOfThreeAProducts(sortedSkusList) {
    const numberOfOfferedProducts = sortedSkusList.filter((sku) => {
        return sku === 'A';
    });

    if (numberOfOfferedProducts.length > 0) {
        return 130;
    }

    return 0;
}

function calculateOfferPrice(skusList) {
    const sortedSkusList = skusList.sort();
    return calculateOfferOfThreeAProducts(sortedSkusList);
    
}

module.exports = calculateOfferPrice;