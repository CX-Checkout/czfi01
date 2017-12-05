const offersList = require("./offers");
const { removeSkusByOffer } = require('./offerProductsRemover');

function calculateOffer(skusList, offeredSku, minimumQuantityForOffer, offeredPrice) {
    const offeredSkus = getOfferedSkus(skusList, offeredSku);

    if (offeredSkus.length >= minimumQuantityForOffer) {
        const numberOfOffers = Math.floor(offeredSkus.length / minimumQuantityForOffer) * minimumQuantityForOffer;
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
    let skusListCopy = [].concat(skusList);
    return offersList.reduce((offeredPrice, offer) => {
        offeredPrice += calculateOffer(skusListCopy, offer.sku, offer.minimumQuantityForOffer, offer.offeredPrice);
        skusListCopy = removeSkusByOffer(skusListCopy, offer);
        return offeredPrice;
    }, 0);
    
}

module.exports = calculateOfferPrice;