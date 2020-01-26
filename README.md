# format-money-js
[![Build Status](https://travis-ci.org/dejurin/format-money-js.svg?branch=master)](https://travis-ci.org/dejurin/format-money-js)

Tiny JavaScript library (484 bytes) by CurrencyRate.today, providing simple and advanced number, money and currency formatting.

## Example

```
const { FormatMoney } = require('./dist/format-money.js');

const fm = FormatMoney(12345.67, {
  decimals: 2,
  prefix: '$'
});
console.log(fm); // $12,345.67
```
