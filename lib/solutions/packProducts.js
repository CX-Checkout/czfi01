const SkusToPrice = require('./productRepository');

const packSkus = ['S', 'T', 'X', 'Y', 'Z'];
const numberOfElementsPerPack = 3;

function packProducts(skusList) {
    const skusListByPrice = skusList.sort((skuOne, skuTwo) => {
        return SkusToPrice[skuOne] > SkusToPrice[skuTwo] ? 1 : -1;
    });

    let packableProducts = skusListByPrice.filter((sku) => {
        return packSkus.indexOf(sku) !== -1;
    });
    
    let numberOfProductsInPacks = Math.floor(packableProducts.length / 3) * 3;

    packableProducts = packableProducts.slice(0, numberOfProductsInPacks);

    return skusList.filter((sku) => {
        let productIndex = packableProducts.indexOf(sku);
        let isPackable = productIndex !== -1;
        if (isPackable) {
            packableProducts = packableProducts.splice(productIndex);
        }

        return !isPackable;
    });
}

module.exports = {
    packProducts,
    numberOfElementsPerPack
};
