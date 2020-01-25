# format-money-js
[![Build Status](https://travis-ci.org/dejurin/format-money-js.svg?branch=master)](https://travis-ci.org/dejurin/format-money-js)

Tiny JavaScript library (576 bytes) by CurrencyRate.today, providing simple and advanced number, money and currency formatting.

## Example

```
const { FormatMoney } = require('format-money-js');

const fm = new FormatMoney({decimals: 2});
console.log(fm.from(12345.67));
```
