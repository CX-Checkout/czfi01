var removeFreeProducts = require('../../lib/solutions/removeFreeProducts');

exports['remove one B if we have two E'] = function(test) {
    test.equal(JSON.stringify(removeFreeProducts(['B', 'E', 'E'])), JSON.stringify(['E', 'E']));
    test.done();
}

exports['returns the array without the free products of our offer'] = function(test) {
    test.equal(JSON.stringify(removeFreeProducts(['B', 'E', 'E', 'C', 'F', 'F'])), JSON.stringify(['E', 'E', 'C', 'F', 'F']));
    test.done();
}

exports['returns the array without the free products of our offers'] = function(test) {
    test.equal(JSON.stringify(removeFreeProducts(['B', 'E', 'E', 'C', 'F', 'F', 'F'])), JSON.stringify(['E', 'E', 'C', 'F', 'F']));
    test.done();
}

exports['returns the array without the free products of our offers'] = function(test) {
    test.equal(JSON.stringify(removeFreeProducts('FFABCDECBAABCABBAAAEEAAFF'.split(''))), JSON.stringify(['E', 'E', 'C', 'F', 'F']));
    test.done();
}