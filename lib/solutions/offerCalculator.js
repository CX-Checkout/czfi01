const offersList = [
    {sku: 'A', minimumQuantityForOffer: 3, offeredPrice: 130},
    {sku: 'B', minimumQuantityForOffer: 2, offeredPrice: 45}
];

function calculateOffer(skusList, offeredSku, minimumQuantityForOffer, offeredPrice) {
    const offeredSkus = getOfferedSkus(skusList, offeredSku);

    if (offeredSkus.length >= minimumQuantityForOffer) {
        const numberOfOffers = Math.ceil(offeredSkus.length / minimumQuantityForOffer) * minimumQuantityForOffer;
        return offeredPrice * (numberOfOffers / minimumQuantityForOffer);
    }

    return 0;
}

function getOfferedSkus(skusList, offeredSku) {
    const offeredSkus = skusList.filter((sku) => {
        return sku === offeredSku;
    });
    return offeredSkus;
}

function calculateOfferPrice(skusList) {
    return offersList.reduce((offeredPrice, offer) => {
        return offeredPrice += calculateOffer(skusList, offer.sku, offer.minimumQuantityForOffer, offer.offeredPrice);
    }, 0);
    
}

module.exports = calculateOfferPrice;