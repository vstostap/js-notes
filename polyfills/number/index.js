'use strict';


/**
 * Nan values are the only values in whole js that isn't equal to itself.
 */

if (!Number.prototype.isNaN) {
    Number.prototype.isNaN = function isNaN(x) {
        return x !== x;
    };
}