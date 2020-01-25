# format-money-js
[![Build Status](https://travis-ci.org/dejurin/format-money-js.svg?branch=master)](https://travis-ci.org/dejurin/format-money-js)

Tiny JavaScript library (668 bytes) by CurrencyRate.today, providing simple and advanced number, money and currency formatting.

## Example

```
const { FormatMoney } = require('format-money-js');

const fm = new FormatMoney({
  decimals: 2,
  prefix: '$'
});
console.log(fm.from(12345.67)); // $12,345.67
```
