var color = require('./Color');
var colorLogPrototype = require('./ColorLogPrototype');
var colorPrototypeProperties = require('./ColorPrototypeProperties');
//var colorPrototype = require('./ColorPrototype');


String.prototype.bright = function () {
    var message = this;
    console.log('\x1b[1m%s\x1b[0m', message);
};

function bright() {
    console.log('\x1b[1m');
}

function reset() {
    console.log('\x1b[2m');
    console.log('\x1b[2m\x1b[37m\x1b[40m');
}

function lolConsole(message) {
    console.log('%c Oh my heavens! ' + ' %ctoto', 'background: #222; color: #bada55', 'color: red');
    var etoile = '*';
    var message = 'Bonjour je m\'appelle Daniel';
    for (var i = 0; i < message.length + 5; i++) {
        etoile += '*';
    }
    console.log(etoile + '\n*  ' + message + '  *\n' + etoile);
}

exports.lolConsole = lolConsole;
exports.cyan = color.cyan;
exports.black = color.black;
exports.red = color.red;
exports.green = color.green;
exports.yellow = color.yellow;
exports.blue = color.blue;
exports.magenta = color.magenta;
exports.white = color.white;
exports.bright = bright;
exports.reset = reset;