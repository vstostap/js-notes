'use strict';


/**
 * Table of Contents:
 * Array.isArray
 * Array.from
 * Array.of
 * Array.prototype.includes
 * Array.prototype.contains
 * Array.prototype.every
 * Array.prototype.filter
 * Array.prototype.find
 * Array.prototype.findIndex
 * Array.prototype.forEach
 * Array.prototype.indexOf
 * Array.prototype.lastIndexOf
 * Array.prototype.map
 * Array.prototype.reduce
 * Array.prototype.reduceRight
 * Array.prototype.some
 */


if(!Array.isArray) {
    (function (toString) {
        Object.defineProperty(Array, 'isArray', {
            configurable: true,
            value: function isArray(object) {
                return toString.call(object) === '[object Array]';
            },
            writable: true
        });
    })(Object.prototype.toString);
}


if(!Array.from) {
    Object.defineProperty(Array, 'from', {
        configurable: true,
        value: function from(source) {
            // handle non-objects
            if (source === undefined || source === null) {
                throw new TypeError(source + ' is not an object');
            }

            // handle maps that are not functions
            if (1 in arguments && !(arguments[1] instanceof Function)) {
                throw new TypeError(arguments[1] + ' is not a function');
            }

            var
                arraylike = typeof source === 'string' ? source.split('') : Object(source),
                map = arguments[1],
                scope = arguments[2],
                array = [],
                index = -1,
                length = Math.min(Math.max(Number(arraylike.length) || 0, 0), 9007199254740991),
                value;

            while (++index < length) {
                if (index in arraylike) {
                    value = arraylike[index];

                    array[index] = map ? map.call(scope, value, index) : value;
                }
            }

            array.length = length;

            return array;
        },
        writable: true
    });
}


if(!Array.of) {
    (function (slice) {
        Object.defineProperty(Array, 'of', {
            configurable: true,
            value: function of() {
                return slice.call(arguments);
            },
            writable: true
        });
    })(Array.prototype.slice);
}


if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
        var O = Object(this);
        var len = parseInt(O.length) || 0;
        if (len === 0) {
            return false;
        }
        var n = parseInt(arguments[1]) || 0;
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {k = 0;}
        }
        var currentElement;
        while (k < len) {
            currentElement = O[k];
            if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
                return true;
            }
            k++;
        }
        return false;
    };
}


if(!Array.prototype.contains){
    Array.prototype.contains = Array.prototype.includes;
}


if(!Array.prototype.every) {
    Array.prototype.every = function every(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }

        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }

        var
            object = Object(this),
            scope = arguments[1],
            arraylike = object instanceof String ? object.split('') : object,
            length = Number(arraylike.length) || 0,
            index = -1;

        while (++index < length) {
            if (index in arraylike && !callback.call(scope, arraylike[index], index, object)) {
                return false;
            }
        }

        return true;
    };
}


if(!Array.prototype.filter) {
    Array.prototype.filter = function filter(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }

        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }

        var
            object = Object(this),
            scope = arguments[1],
            arraylike = object instanceof String ? object.split('') : object,
            length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            index = -1,
            result = [],
            element;

        while (++index < length) {
            element = arraylike[index];

            if (index in arraylike && callback.call(scope, element, index, object)) {
                result.push(element);
            }
        }

        return result;
    };
}


if(!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        configurable: true,
        value: function find(callback) {
            if (this === undefined || this === null) {
                throw new TypeError(this + 'is not an object');
            }

            if (!(callback instanceof Function)) {
                throw new TypeError(callback + ' is not a function');
            }

            var
                object = Object(this),
                scope = arguments[1],
                arraylike = object instanceof String ? object.split('') : object,
                length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
                index = -1,
                element;

            while (++index < length) {
                if (index in arraylike) {
                    element = arraylike[index];

                    if (callback.call(scope, element, index, object)) {
                        return element;
                    }
                }
            }
        },
        writable: true
    });
}


if(!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        configurable: true,
        value: function findIndex(callback) {
            if (this === undefined || this === null) {
                throw new TypeError(this + 'is not an object');
            }

            if (!(callback instanceof Function)) {
                throw new TypeError(callback + ' is not a function');
            }

            var
                object = Object(this),
                scope = arguments[1],
                arraylike = object instanceof String ? object.split('') : object,
                length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
                index = -1;

            while (++index < length) {
                if (index in arraylike) {
                    if (callback.call(scope, arraylike[index], index, object)) {
                        return index;
                    }
                }
            }

            return -1;
        },
        writable: true
    });
}


if(!Array.prototype.forEach) {
    Array.prototype.forEach = function forEach(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }

        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }

        var
            object = Object(this),
            scope = arguments[1],
            arraylike = object instanceof String ? object.split('') : object,
            length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            index = -1,
            result = [],
            element;

        while (++index < length) {
            if (index in arraylike) {
                callback.call(scope, arraylike[index], index, object);
            }
        }
    };
}


if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function indexOf(searchElement) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }

        var
            arraylike = this instanceof String ? this.split('') : this,
            length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            index = Number(arguments[1]) || 0;

        index = (index < 0 ? Math.max(length + index, 0) : index) - 1;

        while (++index < length) {
            if (index in arraylike && arraylike[index] === searchElement) {
                return index;
            }
        }

        return -1;
    };
}


if(!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function lastIndexOf(searchElement) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }

        var
            arraylike = this instanceof String ? this.split('') : this,
            length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            index = Number(arguments[1]) || 0;

        index = 1 in arguments ? (index < 0 ? Math.max(length + index, 0) : index) + 1 : length;

        while (--index >= 0) {
            if (index in arraylike && arraylike[index] === searchElement) {
                return index;
            }
        }

        return -1;
    };
}


if(!Array.prototype.map) {
    Array.prototype.map = function map(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }

        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }

        var
            object = Object(this),
            scope = arguments[1],
            arraylike = object instanceof String ? object.split('') : object,
            length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            index = -1,
            result = [],
            element;

        while (++index < length) {
            if (index in arraylike) {
                result[index] = callback.call(scope, arraylike[index], index, object);
            }
        }

        return result;
    };
}


if(!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }

        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }

        var
            object = Object(this),
            scope = arguments[1],
            arraylike = object instanceof String ? object.split('') : object,
            length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            index = -1,
            previousValue;

        if (1 in arguments) {
            previousValue = arguments[1];
        } else {
            while (++index < length && !(index in arraylike)) {
            }

            if (index >= length) {
                throw new TypeError('Reduce of empty array with no initial value');
            }

            previousValue = arraylike[index];
        }

        while (++index < length) {
            if (index in arraylike) {
                previousValue = callback(previousValue, arraylike[index], index, object);
            }
        }

        return previousValue;
    }
}


if(!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function reduceRight(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }

        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }

        var
            object = Object(this),
            scope = arguments[1],
            arraylike = object instanceof String ? object.split('') : object,
            length = -1,
            index = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            previousValue;

        if (1 in arguments) {
            previousValue = arguments[1];
        } else {
            while (--index > length && !(index in arraylike)) {}

            if (index <= length) {
                throw new TypeError('Reduce of empty array with no initial value');
            }

            previousValue = arraylike[index];
        }

        while (--index > length) {
            if (index in arraylike) {
                previousValue = callback(previousValue, arraylike[index], index, object);
            }
        }

        return previousValue;
    };
}


if(!Array.prototype.some) {
    Array.prototype.some = function some(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }

        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }

        var
            object = Object(this),
            scope = arguments[1],
            arraylike = object instanceof String ? object.split('') : object,
            length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            index = -1;

        while (++index < length) {
            if (index in arraylike && callback.call(scope, arraylike[index], index, object)) {
                return true;
            }
        }

        return false;
    };
}
