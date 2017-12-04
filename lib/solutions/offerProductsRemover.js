const offersList = require("./offers");

function getOfferedSkus(skusList, offeredSku) {
    const offeredSkus = skusList.filter((sku) => {
        return sku === offeredSku;
    });
    return offeredSkus;
}

function sortSkusListBy(skusList, offeredSku) {
    return skusList.sort((sku) => {
        return offeredSku === sku;
    }).reverse();
}

function removeOfferedProducts(skusList) {    
    let sortedSkusList = sortSkusListBy(skusList, offersList[0].sku);
    offersList.forEach(offer => {
        sortedSkusList = sortSkusListBy(sortedSkusList, offer.sku);
        const offeredSkus = getOfferedSkus(sortedSkusList, offer.sku);
        if (offeredSkus.length >= offer.minimumQuantityForOffer) {
            const numberOfOffers = Math.floor(offeredSkus.length / offer.minimumQuantityForOffer) * offer.minimumQuantityForOffer;
            sortedSkusList = sortedSkusList.splice(numberOfOffers);
        }    
    });
    
    return sortedSkusList;
}

module.exports = removeOfferedProducts;