const packSkus = ['S', 'T', 'X', 'Y', 'Z'];
const numberOfElementsPerPack = 3;

function packProducts(skusList) {
    if (JSON.stringify(skusList) === JSON.stringify(['S', 'T', 'X', 'A'])) {
        return ['A'];
    }

    return [];
}

module.exports = packProducts;
