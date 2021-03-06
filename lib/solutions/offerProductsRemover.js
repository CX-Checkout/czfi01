const offersList = require("./offers");

function getOfferedSkus(skusList, offeredSku) {
    const offeredSkus = skusList.filter((sku) => {
        return sku === offeredSku;
    });
    return offeredSkus;
}

function sortSkusListBy(skusList, offeredSku) {
    return skusList.sort((sku) => {
        return offeredSku === sku ? 1 : -1;
    }).reverse();
}

function removeOfferedProducts(skusList) {    
    let sortedSkusList = sortSkusListBy(skusList, offersList[0].sku);
    offersList.forEach(offer => {
        sortedSkusList = removeSkusByOffer(sortedSkusList, offer);    
        
    });

    return sortedSkusList;
}

function removeSkusByOffer(skusList, offer) {
    skusList = sortSkusListBy(skusList, offer.sku);
    const offeredSkus = getOfferedSkus(skusList, offer.sku);
    if (offeredSkus.length >= offer.minimumQuantityForOffer) {
        const numberOfOffers = Math.floor(offeredSkus.length / offer.minimumQuantityForOffer) * offer.minimumQuantityForOffer;
        skusList = skusList.splice(numberOfOffers);
    }
    return skusList;
}

module.exports = {
    removeOfferedProducts,
    removeSkusByOffer
};
