const { FormatMoney } = require('./dist/format-money.js');

const fm1 = new FormatMoney({
  decimals: 2
});

console.log(fm1.from(12345.67, { symbol: '$' }), 'typeof: ' + typeof fm1.from(12345.67, { symbol: '$' }));
console.log(fm1.un('€12,345.67'), 'typeof: ' + typeof fm1.un('€12,345.67'));
console.log(fm1.un('€12.345,67', { decimalPoint: ',' }), 'typeof: ' + typeof fm1.un('€12.345,67', { decimalPoint: ',' }));

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
  'text',
  undefined,
  null,
  '',
];

array0.forEach(element => {
  console.log(element, ' -> ' , fm1.from(element), 'typeof: ' + typeof fm1.from(element));
});

//

const fm2 = new FormatMoney({ symbol: '$' });
console.log(fm2.from(12345.67, { symbol: '€' }), 'typeof: ' + typeof fm2.from(12345.67, { symbol: '€' }));

//

const fm3 = new FormatMoney({ symbol: '$' });
console.log(fm3.from(12345.67, { append: true }), 'typeof: ' + typeof fm3.from(12345.67, { append: true }));

// Fragment

const fm4 = new FormatMoney({ symbol: '$' });
console.log(fm4.from(12345.67, { append: true }, true), 'typeof: ' + typeof fm4.from(12345.67, { append: true }, true));

const fm5 = new FormatMoney({ symbol: '$' });
console.log(fm5.from(-12345.67, { append: true }, true), 'typeof: ' + typeof fm5.from(-12345.67, { append: true }, true));
console.log(fm5.from(-12345.67, { grouping: false, decimals: 2 }, true), 'typeof: ' + typeof fm5.from(-12345.67, { grouping: false, decimals: 2 }, true));
console.log(fm5.from('1234567.890', { grouping: false, decimals: 2 }, true), 'typeof: ' + typeof fm5.from('1234567.890', { grouping: true, decimals: 2 }, true));
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
  123,
  123.45,
  'text',
  undefined,
  null,
  '',
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
  123,
  123.45,
  'text',
  undefined,
  null,
  '',
];

array1.forEach(element => {
  console.log(un1.un(element), 'typeof: ' + typeof un1.un(element));
});

array2.forEach(element => {
  console.log(un2.un(element), 'typeof: ' + typeof un2.un(element));
});