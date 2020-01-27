# format-money-js
[![Build Status](https://travis-ci.org/dejurin/format-money-js.svg?branch=master)](https://travis-ci.org/dejurin/format-money-js)
[![version](https://img.shields.io/npm/v/format-money-js)](https://www.npmjs.com/package/format-money-js)
![download per month](https://img.shields.io/npm/dm/format-money-js)


Tiny JavaScript library (656 bytes) by CurrencyRate.today, providing simple and advanced number, money and currency formatting.

## Example

```
const { FormatMoney } = require('format-money-js');

const fm = new FormatMoney({
  decimals: 2
});

console.log(fm.from(12345.67, { prefix: '$' })); // $12,345.67
```
