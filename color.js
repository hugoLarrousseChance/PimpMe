var letsPimp = require('./applyPimp').applyPimp;

function cyan(message, ...pimp) {
    console.log(letsPimpd(pimp) + "\x1b[36m%s\x1b[0m", message );
}

function black(message, ...pimp) {
    console.log(letsPimp(pimp) + "\x1b[30m%s\x1b[0m", message );
}

function red(message, ...pimp) {
   console.log(letsPimp(pimp) + "\x1b[31m%s\x1b[0m", message );
}

function green(message, ...pimp) {
   console.log(letsPimp(pimp) + "\x1b[32m%s\x1b[0m", message );
}

function yellow(message, ...pimp) {
    console.log(letsPimp(pimp) + "\x1b[33m%s\x1b[0m", message );
}

function blue(message, ...pimp) {
    console.log(letsPimp(pimp) + "\x1b[34m%s\x1b[0m", message );
}

function magenta(message, ...pimp) {
    console.log(letsPimp(pimp) + "\x1b[35m%s\x1b[0m", message );
}

function white(message, ...pimp) {
    console.log(letsPimp(pimp) + "\x1b[37m%s\x1b[0m", message );
}

function grey(message, ...pimp) {
    console.log(letsPimp(pimp) + "\x1b[90m%s\x1b[0m", message );
}

function all(message, ...pimp) {
    console.log(letsPimp(pimp) + "%s\x1b[0m", message );
}



exports.cyan = cyan;
exports.black = black;
exports.red = red;
exports.green = green;
exports.yellow = yellow;
exports.blue = blue;
exports.magenta = magenta;
exports.white = white;
exports.grey = grey;
exports.all = all;
