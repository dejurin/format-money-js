# format-money-js
[![Build Status](https://travis-ci.org/dejurin/format-money-js.svg?branch=master)](https://travis-ci.org/dejurin/format-money-js)
[![version](https://img.shields.io/npm/v/format-money-js)](https://www.npmjs.com/package/format-money-js)
![download per month](https://img.shields.io/npm/dm/format-money-js)


**Zero dependency** tiny JavaScript library (1kB bytes) by CurrencyRate.today, providing simple way and advanced number, money and currency formatting and removes all formatting/cruft and returns the raw float value.


# Functions

**from**:  money and currency formatting;

**un**: removes all formatting/cruft and returns the raw float value.


## Examples

```
const { FormatMoney } = require('format-money-js');

const fm = new FormatMoney({
  decimals: 2
});

console.log(fm.from(12345.67, { symbol: '$' })); // return string: $12,345.67
console.log(fm.un('€12,345;67')); // return number: 12345.67
```

```
const { FormatMoney } = require('format-money-js');

const fm = new FormatMoney({
  decimals: 2
});

console.log(fm.from(
  12345.67, 
  { symbol: '$' },
  true // Parse, return object
  )
);
/* return object: 
{
  source: 12345.67,
  negative: false,
  fullAmount: '12,345.67',
  amount: '12,345',
  decimals: '.67',
  symbol: '$'
}*/
```

## Options

You can added options in construct of class and in method. But method will be primary.
### Example: 
```
const fm = new FormatMoney({ symbol: '$' });

console.log(fm.from(12345.67, { symbol: '€' })); // €12,345.67
console.log(fm.un('€12.345,67', { decimalPoint: ',' })); // 12345.67
```

| Name          | Default  | Type    | Example
|---------------|----------|---------|------------------------------|
| grouping      | true     | Boolean | 1,000 (true) vs 1000 (false) |
| separator     | ,        | String  | 1,000                        |
| decimalPoint  | .        | String  | 1,234.56                     |
| decimals      | 0        | Number  | 1,234 (0 - without decimals) |
| symbol        | None     | String  | $1,234.56 (if append false)  |
| append        | false    | String  | 1,234.56$ (if append true)   |

## Source

https://currencyrate.today/

https://fx-w.io/
