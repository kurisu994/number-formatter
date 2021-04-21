# number-formatierer
![GitHub repo size](https://img.shields.io/github/repo-size/kurisu994/number-formatter)
![Travis (.org) branch](https://img.shields.io/travis/kurisu994/number-formatter/main)
![npm (tag)](https://img.shields.io/npm/v/number-formatierer/latest)
![GitHub](https://img.shields.io/github/license/kurisu994/number-formatter)
## Install

```sh
npm install --save number-formatierer 
or 
yarn add number-formatierer
```


## Usage

```js
var numberFormat = require('number-formatierer')
//import numberFormat from 'number-formatierer' ES6

numberFormat("-12.0000")   // "-12"
numberFormat(120000)  // "120,000"
numberFormat(-120000,  2) // "-120,000.00"
numberFormat(131277.092213, 2, 3)  // "131,277.09"
numberFormat(131277.092213, 2, 3, "#") // "131#277.09"
numberFormat(131277.092213, 2, 3, "#","|") // "131#277|09"
```

## API

### numberFormat(inputNumber, precision, digit, separator, decimalChar)

**Parameters:**

* inputNumber（*required*） : {(Number|String)} Number to format  .
* optionalPrecision: {Number} precision  for the decimal .
* optionalDigit: {Number} digits of the separator. default 3
* separator : {String} Value used to separate numbers.  default ','
* decimalChar : {String} Value used to separate the decimal value. default '.'

**Returns:**

* {String} formatted number, if {inputNumber} is not a number or string, that will be that self


### bindWith(precision, digit, separator, decimalChar)

The `numberFormat` function accepts these same parameters as the second and third params. This prevents using currying to bind them and reuse that bound function.

The `bindWith` function accepts the options and returns a function bound with them.

```javascript
var numberFormat = require('number-formatierer')
//import numberFormat from 'number-formatierer' ES6

const _bindWith = numberFormat.bindWith(2, 4, ",", ".")
_bindWith(131277.092213);  // 13,1277.09
```
### toFixed(num, precision)

same as `number.toFixed` and More accurate than  `number.toFixed`

**Parameters:**

* num（*required*） : {(Number)} Number  .
* precision: {Number} precision  for the decimal . default 3 .

```javascript
var numberFormat = require('number-formatierer')
//import numberFormat from 'number-formatierer' ES6

numberFormat.toFixed(0.015, 2); // 0.02
numberFormat.toFixed(0.025, 2);  // 0.03
numberFormat.toFixed(0.035, 2);  // 0.04
numberFormat.toFixed(0.045, 2);  // 0.05

(0.015).toFixed(2); //0.01
(0.025).toFixed(2); //0.03
(0.035).toFixed(2); //0.04
(0.045).toFixed(2); //0.04
```

## Acknowledgement 
[Comma number](https://github.com/elidoran/comma-number)