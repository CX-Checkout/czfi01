const offersList = require("./offers");

function getOfferedSkus(skusList, offeredSku) {
    const offeredSkus = skusList.filter((sku) => {
        return sku === offeredSku;
    });
    return offeredSkus;
}

function removeOfferedProducts(skusList) {
    let sortedSkusList = skusList.sort();
        
    offersList.forEach(offer => {
        const offeredSkus = getOfferedSkus(sortedSkusList, offer.sku);
        if (offeredSkus.length >= offer.minimumQuantityForOffer) {
            const numberOfOffers = Math.ceil(offeredSkus.length / offer.minimumQuantityForOffer) * offer.minimumQuantityForOffer;
            sortedSkusList = sortedSkusList.splice(numberOfOffers);
        }    
    });
    
    return sortedSkusList;
}

module.exports = removeOfferedProducts;