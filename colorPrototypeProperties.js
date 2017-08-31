Object.defineProperty(Object.prototype, "black", {
   get: function () {
        var message = this;
        return('\x1b[30m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "red", {
    get: function () {
        var message = this;
        return('\x1b[31m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "green", {
    get: function () {
        var message = this;
        return('\x1b[32m' + message + '\x1b[0m');
    }
});


Object.defineProperty(Object.prototype, "yellow", {
    get: function () {
        var message = this;
        return('\x1b[33m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "blue", {
    get: function () {
        var message = this;
        return('\x1b[34m' + message + '\x1b[0m');
    }
});


Object.defineProperty(Object.prototype, "magenta", {
    get: function () {
        var message = this;
        return('\x1b[35m' + message + '\x1b[0m');
    }
});


Object.defineProperty(Object.prototype, "cyan", {
    get: function () {
        var message = this;
        return('\x1b[36m' + message + '\x1b[0m');
    }
});


Object.defineProperty(Object.prototype, "white", {
    get: function () {
        var message = this;
        return('\x1b[37m' + message + '\x1b[0m');
    }
});

/**** Styles *****/

Object.defineProperty(Object.prototype, "bright", {
    get: function () {
        var message = this;
        return('\x1b[1m' + message + '\x1b[22m');
    }
});

Object.defineProperty(Object.prototype, "reset", {
    get: function () {
        var message = this;
        return('\x1b[0m' + message + '\x1b[22m');
    }
});

Object.defineProperty(Object.prototype, "dim", {
    get: function () {
        var message = this;
        return('\x1b[2m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "underscore", {
    get: function () {
        var message = this;
        return('\x1b[4m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "blink", {
    get: function () {
        var message = this;
        return('\x1b[5m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "reverse", {
    get: function () {
        var message = this;
        return('\x1b[7m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "hiddenP", {
    get: function () {
        var message = this;
        return('\x1b[8m' + message + '\x1b[0m');
    }
});

/**** Background ****/

Object.defineProperty(Object.prototype, "bgBlack", {
    get: function () {
        var message = this;
        return('\x1b[40m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "bgRed", {
    get: function () {
        var message = this;
        return('\x1b[41m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "bgGreen", {
    get: function () {
        var message = this;
        return('\x1b[42m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "bgYellow", {
    get: function () {
        var message = this;
        return('\x1b[43m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "bgBlue", {
    get: function () {
        var message = this;
        return('\x1b[44m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "bgMagenta", {
    get: function () {
        var message = this;
        return('\x1b[45m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "bgCian", {
    get: function () {
        var message = this;
        return('\x1b[46m' + message + '\x1b[0m');
    }
});

Object.defineProperty(Object.prototype, "bgWhite", {
    get: function () {
        var message = this;
        return('\x1b[47m' + message + '\x1b[0m');
    }
});
    