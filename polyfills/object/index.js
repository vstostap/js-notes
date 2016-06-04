'use strict';


/**
 * Table of Contents:
 * Object.assign
 * Object.create
 * Object.defineProperties
 * Object.getOwnPropertyNames
 * Object.getPrototypeOf
 * Object.is
 * Object.keys
 */

if(!Object.assign) {
    Object.assign = function assign(target, source) {
        for (var index = 1, key, src; index < arguments.length; ++index) {
            src = arguments[index];

            for (key in src) {
                if (Object.prototype.hasOwnProperty.call(src, key)) {
                    target[key] = src[key];
                }
            }
        }

        return target;
    };
}


if(!Object.create) {
    Object.create = function create(prototype, properties) {
        /* jshint evil: true */
        if (typeof prototype !== 'object' && prototype !== null) {
            throw TypeError('Object prototype may only be an Object or null');
        }

        var
            object = new Function('e', 'function Object() {}Object.prototype=e;return new Object')(prototype);

        object.constructor.prototype = prototype;

        if (1 in arguments) {
            Object.defineProperties(object, properties);
        }

        return object;
    };
}


if(!Object.defineProperties) {
    Object.defineProperties = function defineProperties(object, descriptors) {
        for (var property in descriptors) {
            Object.defineProperty(object, property, descriptors[property]);
        }

        return object;
    };
}


if(!Object.getOwnPropertyNames) {
    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
        var buffer = [];
        var key;

        // Non-enumerable properties cannot be discovered but can be checked for by name.
        // Define those used internally by JS to allow an incomplete solution
        var commonProps = ['length', "name", "arguments", "caller", "prototype", "observe", "unobserve"];

        if (typeof object === 'undefined' || object === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        object = Object(object);

        // Enumerable properties only
        for (key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                buffer.push(key);
            }
        }

        // Check for and add the common non-enumerable properties
        for (var i=0, s=commonProps.length; i<s; i++) {
            if (commonProps[i] in object) buffer.push(commonProps[i]);
        }

        return buffer;
    };
}


if(!Object.getPrototypeOf) {
    Object.getPrototypeOf = function getPrototypeOf(object) {
        if (object !== Object(object)) {
            throw new TypeError('Object.getPrototypeOf called on non-object');
        }

        return object.constructor ? object.constructor.prototype : null;
    };
}


if(!Object.is) {
    Object.is = function is(a, b) {
        return (a === b && (a !== 0 || 1 / a === 1 / b)) || (a !== a && b !== b);
    };
}


if(!Object.keys) {
    Object.keys = (function() {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
            dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            dontEnumsLength = dontEnums.length;

        return function(obj) {
            if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                throw new TypeError('Object.keys called on non-object');
            }

            var result = [], prop, i;

            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }

            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    }());
}