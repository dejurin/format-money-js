const { FormatMoney } = require('./dist/format-money.js');

const fm1 = new FormatMoney();

console.log(fm1.from(12345.6789));
console.log(fm1.options.decimals = 4);
console.log(fm1.from(12345.6789));
