var hello = require('../../lib/solutions/hello');

exports['say hello'] = function (test) {
    test.equal(hello('world'), 'hello world');
    test.done();
};