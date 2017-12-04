
function calculateOfferPrice(skusList) {
    const sortedSkusList = skusList.sort();
    if (JSON.stringify(sortedSkusList.slice(0, 3)) === JSON.stringify(['A', 'A', 'A'])) {
        return 130;
    }

    return 0;
}

module.exports = calculateOfferPrice;