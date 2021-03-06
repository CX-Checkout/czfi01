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

exports['returns the array without the free product of our offer'] = function(test) {
    test.equal(JSON.stringify(removeFreeProducts(['N','N','N','M'])), JSON.stringify(['N','N','N']));
    test.done();
}

exports['returns the same array if we don\'t have any free product'] = function(test) {
    test.equal(JSON.stringify(removeFreeProducts(['U','U','U'])), JSON.stringify(['U','U','U']));
    test.done();
}