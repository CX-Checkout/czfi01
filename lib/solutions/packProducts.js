const packSkus = ['S', 'T', 'X', 'Y', 'Z'];
const numberOfElementsPerPack = 3;
const SkusToPrice = require('./productRepository');

function packProducts(skusList) {
    let packableProducts = skusList.filter((sku) => {
        return packSkus.indexOf(sku) !== -1;
    });
    
    let numberOfProductsInPacks = Math.floor(packableProducts.length / 3) * 3;
    packableProducts.sort((a, b) => {
        return SkusToPrice[a] > SkusToPrice[b] ? -1 : 1;
    });
    
    packableProducts = packableProducts.slice(0, numberOfProductsInPacks);
    
    return skusList.filter((sku) => {
        let productIndex = packableProducts.indexOf(sku);
        let isPackable = productIndex !== -1;
        
        if (isPackable) {
            packableProducts.splice(productIndex, 1);
        }

        return !isPackable;
    });
}

module.exports = {
    packProducts,
    numberOfElementsPerPack
};