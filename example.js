const { FormatMoney } = require('./dist/format-money.js');

const fm = new FormatMoney({
  decimals: 2
});

console.log(fm.from(12345.67, { prefix: '$' })); // $12,345.67