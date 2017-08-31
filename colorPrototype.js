var colorBackground = require('./colorBackground').background;
var style = require('./styles').styles;

Object.defineProperty(Object.prototype, "black", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        return('\x1b[30m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "red", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        return('\x1b[31m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "green", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        return('\x1b[32m' + message + '\x1b[0m');
    }
});


Object.defineProperty(Object.prototype, "yellow", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        return('\x1b[33m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "blue", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        return('\x1b[34m' + message + '\x1b[0m');
    }
});


Object.defineProperty(Object.prototype, "magenta", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        return('\x1b[35m' + message + '\x1b[0m');
    }
});


Object.defineProperty(Object.prototype, "cyan", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        return('\x1b[36m' + message + '\x1b[0m');
    }
});


Object.defineProperty(Object.prototype, "white", {
    enumerable: false,
    value: function (background = 0, form = 0) {
        if (background) {
            colorBackground(background.toLowerCase());
        }
        if (form) {
            style(form.toLowerCase());
        }
        var message = this;
        return('\x1b[37m' + message + '\x1b[0m');
    }
});


    