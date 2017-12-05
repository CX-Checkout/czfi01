const skusToFreeProducts = [
    {sku: 'E', freeSku: 'B'},
    {sku: 'F', freeSku: 'F'}
];

function removeFreeProducts(skusList) {
    let numberOfBToRemove = Math.floor(skusList.filter((sku) => {
        return sku === 'E';
    }).length / 2);

    return skusList.filter((sku) => {
        if (sku === 'B') {
            numberOfBToRemove--;
        }

        return sku !== 'B' || (sku === 'B' && (numberOfBToRemove + 1) <= 0);
    });
}

module.exports =  removeFreeProducts;
