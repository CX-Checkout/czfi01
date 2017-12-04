const offersList = [
    {sku: 'A', minimumQuantityForOffer: 3, offeredPrice: 130},
    {sku: 'B', minimumQuantityForOffer: 2, offeredPrice: 45}
];

function calculateOffer(skusList, offeredSku, minimumQuantityForOffer, offeredPrice) {
    const productsWithOffer = skusList.filter((sku) => {
        return sku === offeredSku;
    });

    if (productsWithOffer.length >= minimumQuantityForOffer) {
        const numberOfOffers = Math.ceil(productsWithOffer.length / minimumQuantityForOffer) * minimumQuantityForOffer;
        return offeredPrice * (numberOfOffers / minimumQuantityForOffer);
    }

    return 0;
}

function calculateOfferPrice(skusList) {
    
    return offersList.reduce((element, offeredPrice) => {
        offeredPrice += calculateOffer(skusList, element.sku, element.minimumQuantityForOffer, element.offeredPrice);
    }, 0);
    
}

module.exports = calculateOfferPrice;
