var colorBackground = require('./colorBackground').background;
var style = require('./styles').styles;

function cyan(message, ...pimp) {
    if (background) {
        colorBackground(background.toLowerCase());
    }
    if (form) {
        style(form.toLowerCase());
    }
    console.log('\x1b[36m%s\x1b[0m', message);
}

function black(message, background = 0, form = 0) {
    if (background) {
        colorBackground(background.toLowerCase());
    }
    if (form) {
        style(form.toLowerCase());
    }
    console.log('\x1b[30m%s\x1b[0m', message);
}

function red(message, background = 0, form = 0) {
    if (background) {
        colorBackground(background.toLowerCase());
    }
    if (form) {
        style(form.toLowerCase());
    }
    console.log('\x1b[31m%s\x1b[0m', message);
}

function green(message, background = 0, form = 0) {
    if (background) {
        colorBackground(background.toLowerCase());
    }
    if (form) {
        style(form.toLowerCase());
    }
    console.log('\x1b[32m%s\x1b[0m', message);
}

function yellow(message, background = 0, form = 0) {
    if (background) {
        colorBackground(background.toLowerCase());
    }
    if (form) {
        style(form.toLowerCase());
    }
    console.log('\x1b[33m%s\x1b[0m', message);
}

function blue(message, background = 0, form = 0) {
    if (background) {
        colorBackground(background.toLowerCase());
    }
    if (form) {
        style(form.toLowerCase());
    }
    console.log('\x1b[34m%s\x1b[0m', message);
}

function magenta(message, background = 0, form = 0) {
    if (background) {
        colorBackground(background.toLowerCase());
    }
    if (form) {
        style(form.toLowerCase());
    }
    console.log('\x1b[35m%s\x1b[0m', message);
}



function white(message, background = 0, form = 0) {
    if (background) {
        colorBackground(background.toLowerCase());
    }
    if (form) {
        style(form.toLowerCase());
    }
    console.log('\x1b[37m%s\x1b[0m', message);
}

function grey(message, background = 0, form = 0) {
    if (background) {
        colorBackground(background.toLowerCase());
    }
    if (form) {
        style(form.toLowerCase());
    }
    console.log('\x1b[90m%s\x1b[0m', message);
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
