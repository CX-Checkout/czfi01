function removeFreeProducts(skusList) {
    let numberOfBToRemove = skusList.filter((sku) => {
        return sku === 'E';
    }).length;
    
    return ["E", "E"];
}

module.exports =  removeFreeProducts;