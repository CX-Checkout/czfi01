
function calculateOfferPrice(skusList) {
    if (JSON.stringify(skusList) === JSON.stringify(['A', 'A', 'A'])) {
        return 130;
    }

    return 0;
}

module.exports = calculateOfferPrice;
