var colorBackground = require('./ColorBackground').background;
var style = require('./Styles').styles;

Object.defineProperty(Object.prototype, "blackLog", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        console.log('\x1b[30m%s\x1b[0m', message);
    }
});

Object.defineProperty(Object.prototype, "redLog", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        console.log('\x1b[31m%s\x1b[0m', message);
    }
});

Object.defineProperty(Object.prototype, "greenLog", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        console.log('\x1b[32m%s\x1b[0m', message);
    }
});


Object.defineProperty(Object.prototype, "yellowLog", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        console.log('\x1b[33m%s\x1b[0m', message);
    }
});

Object.defineProperty(Object.prototype, "blueLog", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        console.log('\x1b[34m%s\x1b[0m', message);
    }
});


Object.defineProperty(Object.prototype, "magentaLog", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        console.log('\x1b[35m%s\x1b[0m', message);
    }
});


Object.defineProperty(Object.prototype, "cyanLog", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        console.log('\x1b[36m%s\x1b[0m', message);
    }
});


Object.defineProperty(Object.prototype, "whiteLog", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        console.log('\x1b[37m%s\x1b[0m', message);
    }
});


    