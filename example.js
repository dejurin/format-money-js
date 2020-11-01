const { FormatMoney } = require('./dist/format-money.js');

const fm1 = new FormatMoney({
  decimals: 2
});

console.log(fm1.from(12345.67, { symbol: '$' })); // $12,345.67
console.log(fm1.un('€12,345.67')); // 12345.67
console.log(fm1.un('€12.345,67', { decimalPoint: ',' })); // 12345.67

//

const array0 = [
  1,
  12,
  123,
  1234,
  12345,
  123456,
  1234567,
  12345678,
  123456789,
  1234567890,
  12345678901,
  123456789012,
  1234567890123,
  12345678901234,
  123456789012345,
  1234567890123456,
  12345678901234567,
  123456789012345678,
  1234567890123456789,
];

array0.forEach(element => {
  console.log(fm1.from(element));
});

//

const fm2 = new FormatMoney({ symbol: '$' });
console.log(fm2.from(12345.67, { symbol: '€' })); // €12,345.67

//

const fm3 = new FormatMoney({ symbol: '$' });
console.log(fm2.from(12345.67, { append: true })); // 12,345.67$

//

const un1 = new FormatMoney();
const un2 = new FormatMoney({'decimalPoint': ','});

const array1 = [
  '$12,345.67',
  '12,345.67',
  '$12 345.67',
  '12 345.67',
  '$12,345.67 USD',
  '12,345.67 USD',
  '$12 345.67 USD',
  '12 345.67 USD',
  'text',
];

const array2 = [
  '$12.345,67',
  '12.345,67',
  '$12 345,67',
  '12 345,67',
  '$12.345,67 USD',
  '12.345,67 USD',
  '$12 345,67 USD',
  '12 345,67 USD',
  'text',
];

array1.forEach(element => {
  console.log(un1.un(element));
});

array2.forEach(element => {
  console.log(un2.un(element));
});