const { FormatMoney } = require('./dist/format-money.js');

const fm1 = new FormatMoney({
  decimals: 2
});

console.log(fm1.from(12345.67, { symbol: '$' })); // $12,345.67

//

const fm2 = new FormatMoney({ symbol: '$' });

console.log(fm2.from(12345.67, { symbol: '€' })); // €12,345.67

//

const fm3 = new FormatMoney({ symbol: '$' });

console.log(fm2.from(12345.67, { append: true })); // 12,345.67$