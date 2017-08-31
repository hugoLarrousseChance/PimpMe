var letsPimp = require('./applyPimp').applyPimp;

Object.defineProperty(Object.prototype, "black", {
    enumerable: false,
    value: function (...pimp) {
        return(letsPimp(pimp) + "\x1b[30m" + this + "\x1b[0m");
    }
});

Object.defineProperty(Object.prototype, "red", {
    enumerable: false,
    value: function (...pimp) {
        return(letsPimp(pimp) + "\x1b[31m" + this + "\x1b[0m");  
    }
});

Object.defineProperty(Object.prototype, "green", {
    enumerable: false,
    value: function (...pimp) {
       return(letsPimp(pimp) + "\x1b[32m" + this + "\x1b[0m");
    }
});


Object.defineProperty(Object.prototype, "yellow", {
    enumerable: false,
    value: function (...pimp) {
       return(letsPimp(pimp) + "\x1b[33m" + this + "\x1b[0m");
    }
});

Object.defineProperty(Object.prototype, "blue", {
    enumerable: false,
    value: function (...pimp) {
        return(letsPimp(pimp) + "\x1b[34m" + this + "\x1b[0m");
    }
});


Object.defineProperty(Object.prototype, "magenta", {
    enumerable: false,
    value: function (...pimp) {
        return(letsPimp(pimp) + "\x1b[35m" + this + "\x1b[0m");
    }
});


Object.defineProperty(Object.prototype, "cyan", {
    enumerable: false,
    value: function (...pimp) {
        return(letsPimp(pimp) + "\x1b[36m" + this + "\x1b[0m");
    }
});


Object.defineProperty(Object.prototype, "white", {
    enumerable: false,
    value: function (...pimp) {
        return(letsPimp(pimp) + "\x1b[37m" + this + "\x1b[0m");
        
    }
});


    