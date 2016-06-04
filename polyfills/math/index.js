'use strict';


/**
 * Table of Contents:
 * Math.sign
 * Math.trunc
 * Math.sinh
 * Math.cosh
 * Math.tanh
 * Math.asinh
 * Math.acosh
 * Math.atanh
 * Math.cbrt
 * Math.clz32
 * Math.hypot
 * Math.imul
 * Math.log2
 * Math.log10
 */


if(!Math.sign) {
    Math.sign = function sign(x) {
        return !(x = Number(x)) ? x : x > 0 ? 1 : -1;
    };
}


if(!Math.trunc) {
    Math.trunc = function trunc(x) {
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    };
}


if(!Math.sinh) {
    Math.sinh = function sinh(x) {
        var y = Math.exp(x);

        return (y - 1 / y) / 2;
    };
}


if(!Math.cosh) {
    Math.cosh = function cosh(x) {
        var y = Math.exp(x);

        return (y + 1 / y) / 2;
    };
}


if(!Math.tanh) {
    Math.tanh = function tanh(x) {
        var y;

        return x === Infinity ? 1 : x === -Infinity ? -1 : (y = Math.exp(2 * x), (y - 1) / (y + 1));
    };
}


if(!Math.asinh){
    Math.asinh = function asinh(x) {
        return x === -Infinity ? x : Math.log(x + Math.sqrt(x * x + 1));
    };
}


if(!Math.acosh) {
    Math.acosh = function(x) {
        Math.log(x + Math.sqrt(x * x - 1));
    }
}


if(!Math.atanh){
    Math.atanh = function atanh(x) {
        return Math.log((1 + x) / (1 - x)) / 2;
    };
}


if(!Math.cbrt){
    Math.cbrt = function cbrt(x) {
        var y = Math.pow(Math.abs(x), 1 / 3);

        return x < 0 ? -y : y;
    };
}


if(!Math.clz32) {
    Math.clz32 = function clz32(x) {
        var value = Number(value) >>> 0;

        return value ? 32 - value.toString(2).length : 32;
    };
}


if(!Math.hypot) {
    Math.hypot = function hypot() {
        var args = arguments, index = -1, y = 0;

        while (++index in args && Math.abs(y) !== Infinity) {
            y += args[index] * args[index];
        }

        return Math.abs(y) === Infinity ? Infinity : Math.sqrt(y);
    };
}


if(!Math.imul) {
    Math.imul = function imul(a, b) {
        var
            ah  = (a >>> 16) & 0xffff,
            al = a & 0xffff,
            bh  = (b >>> 16) & 0xffff,
            bl = b & 0xffff;

        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
    };
}


if(!Math.log2) {
    Math.log2 = function log2(x) {
        return Math.log(x) / Math.LN2;
    };
}


if(!Math.log10) {
    Math.log10 = function log10(x) {
        return Math.log(x) / Math.LN10;
    };
}