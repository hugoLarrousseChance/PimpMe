var color = require('./Color');
var colorLogPrototype = require('./ColorLogPrototype');
var colorPrototypeProperties = require('./ColorPrototypeProperties');
//var colorPrototype = require('./ColorPrototype');

function reset() {
    console.log('\x1b[2m\x1b[37m\x1b[40m');
}

exports.cyan = color.cyan;
exports.black = color.black;
exports.red = color.red;
exports.green = color.green;
exports.yellow = color.yellow;
exports.blue = color.blue;
exports.magenta = color.magenta;
exports.white = color.white;
exports.reset = reset;