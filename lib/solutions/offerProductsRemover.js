// const offersList = require("./offers");

function getOfferedSkus(skusList, offeredSku) {
    const offeredSkus = skusList.filter((sku) => {
        return sku === offeredSku;
    });
    return offeredSkus;
}

function removeOfferedProducts(skusList) {
    const sortedSkusList = skusList.sort();
    const offeredSkus = getOfferedSkus(sortedSkusList, 'A');
    if (offeredSkus.length >= 3) {
        const numberOfOffers = Math.ceil(offeredSkus.length / 3) * 3;
        return sortedSkusList.slice((numberOfOffers-1), -1);
    }

    return [];
}

module.exports = removeOfferedProducts;
