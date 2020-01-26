const { FormatMoney } = require('./dist/format-money.js');

const fm = FormatMoney(12345.67, {
  decimals: 2,
  prefix: '$'
});
console.log(fm); // $12,345.67