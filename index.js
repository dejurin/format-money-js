const { FormatMoney } = require('format-money-js');

const fm = new FormatMoney({
  decimals: 2,
  prefix: '$'
});
console.log(fm.from(12345.67)); // $12,345.67