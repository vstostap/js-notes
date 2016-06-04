'use strict';

1 + - + + + - + 1;  // 2
[] == ![];      // true

2 == [2];       // true
"" == [null];   // true

[] + {}; // "[object Object]"
{} + []; // 0


undefined === void 0; //true
undefined === null; //false
undefined == null; //true

42 === "42";    // false
42 == "42";     // true

[ "42" ] < [ "043" ];  // false
043 //35
42 + 043 //77

typeof undefined     === "undefined"; // true
typeof null          === "object";    // true
typeof true          === "boolean";   // true
typeof 42            === "number";    // true
typeof "42"          === "string";    // true
typeof { life: 42 }  === "object";    // true
typeof Function      === "function"   // true
typeof [1,2,3]       === "object";    // true

// added in ES6!
typeof Symbol()      === "symbol";    // true


// Natives:

String()
Number()
Boolean()
Array()
Object()
Function()
RegExp()
Date()
Error()
Symbol() //-- added in ES6!



Object.prototype.toString.call( "abc" );    // "[object String]"
Object.prototype.toString.call( 42 );       // "[object Number]"
Object.prototype.toString.call( true );     // "[object Boolean]"
Object.prototype.toString.call( [1,2,3] );  // "[object Array]"
Object.prototype.toString.call( /regex-literal/i );  // "[object RegExp]"
Object.prototype.toString.call( null );      // "[object Null]"
Object.prototype.toString.call( undefined ); // "[object Undefined]"


JSON.stringify( undefined );                    // undefined
JSON.stringify( function(){} );                 // undefined

JSON.stringify( [1,undefined,function(){},4] ); // "[1,null,null,4]"
JSON.stringify( { a:2, b:function(){} } );      // "{"a":2}"



Number( "" );           // 0
Number( [] );           // 0
Number( [ "abc" ] );    // NaN

Number( "42px" );    // NaN
parseInt( "42px" );  // 42



0 | -0;         // 0
0 | NaN;        // 0
0 | Infinity;   // 0
0 | -Infinity;  // 0



Math.ceil(-49.6)        // -49
~~-49.6;                // -49
Math.floor( -49.6 );    // -50


(function(){
  var a = "0";
  var b = [];
  var c = {};

  var d = "";
  var e = 0;
  var f = null;
  var g;

  !!a;    // true
  !!b;    // true
  !!c;    // true

  !!d;    // false
  !!e;    // false
  !!f;    // false
  !!g;    // false
})();

(function(){
  var a = 42;
  var b = "foo";
  var c = false;

  a && b || c ? c || b ? a : c && b : a;  //42
})()


var arr1 = [1,2];
var arr2 = [3,4];

arr1 + arr2; // "1,23,4"


(function(){
  var a = 42;
  var b = "abc";
  var c = null;

  a || b;     // 42
  a && b;     // "abc"

  c || b;     // "abc"
  c && b;     // null


  // bad (will fail!):
  if (a == true) {
      // ..
  }

  // also bad (will fail!):
  if (a === true) {
      // ..
  }

  // good enough (works implicitly):
  if (a) {
      // ..
  }

  // better (works explicitly):
  if (!!a) {
      // ..
  }

  // also great (works explicitly):
  if (Boolean( a )) {
      // ..
  }
})();



a || b;
// roughly equivalent to:
a ? a : b;

a && b;
// roughly equivalent to:
a ? b : a;



"0" == null;            // false
"0" == undefined;       // false
"0" == false;           // true -- UH OH!
"0" == NaN;             // false
"0" == 0;               // true
"0" == "";              // false

false == null;          // false
false == undefined;     // false
false == NaN;           // false
false == 0;             // true -- UH OH!
false == "";            // true -- UH OH!
false == [];            // true -- UH OH!
false == {};            // false

"" == null;             // false
"" == undefined;        // false
"" == NaN;              // false
"" == 0;                // true -- UH OH!
"" == [];               // true -- UH OH!
"" == {};               // false

0 == null;              // false
0 == undefined;         // false
0 == NaN;               // false
0 == [];                // true -- UH OH!
0 == {};                // false


true ? false : true ? true : false;     // false
true ? false : (true ? true : false);   // false
(true ? false : true) ? true : false;   // false
(true ? false : true) ? true : true;    // true



var myObject = { };

myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";

myObject["true"];               // "foo"
myObject["3"];                  // "bar"
myObject["[object Object]"];    // "baz"
