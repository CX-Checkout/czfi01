var hello = require('../../lib/solutions/hello');

exports['say hello to a friend'] = function (test) {
    test.equal(hello('John'), 'Hello, John!');
    test.done();
};