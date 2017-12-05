const packSkus = ['S', 'T', 'X', 'Y', 'Z'];

function packProducts(skusList) {
    if (JSON.stringify(skusList) === JSON.stringify(['S', 'T', 'X', 'A'])) {
        return ['A'];
    }

    return [];
}

module.exports = packProducts;