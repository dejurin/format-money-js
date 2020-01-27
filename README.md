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

## Options

| Name          | Default  | Type    | Example
|---------------|----------|---------|------------------------------|
| grouping      | true     | Boolean | 1,000 (true) vs 1000 (false) |
| separator     | ,        | String  | 1,000                        |
| decimalPoint  | .        | String  | 1,234.56                     |
| decimals      | 0        | Number  | 1,234 (0 - without decimals) |
| prefix        | None     | String  | $1,234.56 (before)           |
| suffix        | None     | String  | 1,234.56$ (after)            |

You can added options in construct of class and in method. But method will be primary.
### Example: 
```
const fm = new FormatMoney({ prefix: '$' });

console.log(fm.from(12345.67, { prefix: '€' })); // €12,345.67
```

## Thank you

https://currencyrate.today/