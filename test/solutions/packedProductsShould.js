exports['return a a new list without the packed products'] = function(test) {
    test.equal(JSON.stringify(packProducts(['S', 'T', 'X'])), JSON.stringify([]));
    test.done();
}