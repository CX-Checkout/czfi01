function calculateOfferOfThreeAProducts(skusList) {
    const productsWithOffer = skusList.filter((sku) => {
        return sku === 'A';
    });

    if (productsWithOffer.length > 0) {
        const numberOfOffers = Math.ceil(productsWithOffer.length / 3) * 3;
        return 130 * (numberOfOffers / 3);
    }

    return 0;
}

function calculateOfferOfTwoBProducts(skusList) {
    const productsWithOffer = skusList.filter((sku) => {
        return sku === 'B';
    });

    if (productsWithOffer.length > 0) {
        
    }
} 

function calculateOfferPrice(skusList) {
    return calculateOfferOfThreeAProducts(skusList);
    
}

module.exports = calculateOfferPrice;
