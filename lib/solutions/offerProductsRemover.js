const offersList = require("./offers");

function getOfferedSkus(skusList, offeredSku) {
    const offeredSkus = skusList.filter((sku) => {
        return sku === offeredSku;
    });
    return offeredSkus;
}

function removeOfferedProducts(skusList) {
    let sortedSkusList = skusList.sort();
    return removeProductsByOffers(sortedSkusList);
}

function removeProductsByOffers() {
    offersList.foE
    const offeredSkus = getOfferedSkus(sortedSkusList, 'A');
    if (offeredSkus.length >= 3) {
        const numberOfOffers = Math.ceil(offeredSkus.length / 3) * 3;
        return sortedSkusList.splice(numberOfOffers);
    }

    return skusWithoutOffer;
}

module.exports = removeOfferedProducts;