function removeFreeProducts(skusList) {
    let numberOfBToRemove = skusList.filter((sku) => {
        return sku === 'E';
    }).length;

    return skusList.filter((sku) => {
        if (sku === 'B') {
            numberOfBToRemove--;
        }
        return sku !== 'B' || (sku === 'B' && numberOfBToRemove === 0);
    });
}

module.exports =  removeFreeProducts;
