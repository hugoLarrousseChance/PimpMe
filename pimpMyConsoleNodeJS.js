//pimp.red('Hello World', 'green', 'bright'); 
var color = require('./color');

//'Hello World'.redLog('green', 'bright'); 
function colorLogPrototype() {
    var colorLogPrototype = require('./colorLogPrototype');
}

//console.log('Hello World'.red.bright.bgGreen); 
function colorPrototypeProperties() {
    var colorPrototypeProperties = require('./colorPrototypeProperties');
}

//console.log('Hello World'.red('green', 'bright ));
function colorPrototype() {
    var colorPrototype = require('./ColorPrototype');
}

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
exports.colorLogPrototype = colorLogPrototype;
exports.colorPrototypeProperties = colorPrototypeProperties;
exports.colorPrototype = colorPrototype;
