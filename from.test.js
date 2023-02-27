const test = require('tape');

const { FormatMoney } = require('./dist/format-money');

const fm1 = new FormatMoney();

test('FormatMoney(): valid params', (t) => {
  t.equal('0', fm1.from(0, {}), 'should return 0');
  t.equal('0.00', fm1.from(0, { decimals: 2 }), 'should return 0.00');
  t.equal(undefined, fm1.from(undefined * 1, { decimals: 2 }), 'should return undefined');
  t.equal(undefined, fm1.from(undefined, { decimals: 2 }), 'should return undefined');
  t.equal(undefined, fm1.from(NaN, { decimals: 2 }), 'should return undefined');
  t.equal('1', fm1.from(1, {}), 'should return 1');
  t.equal('1,20', fm1.from(1.2, { decimalPoint: ',', decimals: 2 }), 'should return 1,20');
  t.equal('1.20', fm1.from(1.2, { decimalPoint: '.', decimals: 2 }), 'should return 1.20');
  t.equal('1,000.20', fm1.from(1000.2, { decimalPoint: '.', decimals: 2, grouping: true }), 'should return 1,000.20');
  t.equal('1.000,20', fm1.from(1000.2, {
    decimalPoint: ',', decimals: 2, grouping: true, separator: '.',
  }), 'should return 1.000,20');
  t.equal('$1.000,20', fm1.from(1000.2, {
    decimalPoint: ',', decimals: 2, grouping: true, separator: '.', symbol: '$',
  }), 'should return $1.000,20');
  t.equal('1.000,20$', fm1.from(1000.2, {
    decimalPoint: ',', decimals: 2, grouping: true, separator: '.', symbol: '$', append: true,
  }), 'should return 1.000,20$');
  t.equal('1.234.567.890.123.456,00$', fm1.from(1234567890123456, {
    decimalPoint: ',', decimals: 2, grouping: true, separator: '.', symbol: '$', append: true,
  }), 'should return 1.234.567.890.123.456,00$');
  t.equal('1.1', fm1.from(1.1, { decimalPoint: '.', decimals: 2, leadZeros: false }), 'should return 1.1');
  t.equal('1.2', fm1.from(1.20, { decimalPoint: '.', decimals: 2, leadZeros: false }), 'should return 1.2');
  t.equal('1.3', fm1.from(1.300, { decimalPoint: '.', decimals: 2, leadZeros: false }), 'should return 1.3');
  t.equal('1.4', fm1.from(1.401, { decimalPoint: '.', decimals: 2, leadZeros: false }), 'should return 1.4');
  t.equal('1.501', fm1.from(1.501, { decimalPoint: '.', decimals: 3, leadZeros: false }), 'should return 1.501');
  t.equal('1.60', fm1.from(1.6, { decimalPoint: '.', decimals: 2, leadZeros: true }), 'should return 1.60');
  t.equal('1.70', fm1.from(1.70, { decimalPoint: '.', decimals: 2, leadZeros: true }), 'should return 1.70');
  t.equal('1.80', fm1.from(1.800, { decimalPoint: '.', decimals: 2, leadZeros: true }), 'should return 1.80');
  t.equal('1.90', fm1.from(1.901, { decimalPoint: '.', decimals: 2, leadZeros: true }), 'should return 1.90');
  t.equal('1.901', fm1.from(1.901, { decimalPoint: '.', decimals: 3, leadZeros: true }), 'should return 1.901');
  t.equal('0.00', fm1.from(-0.000123, { decimalPoint: '.', decimals: 2, leadZeros: true }), 'should return 0');
  t.equal('0.00', fm1.from(0.000123, { decimalPoint: '.', decimals: 2, leadZeros: true }), 'should return 0');
  t.equal('0', fm1.from(-0.000123, { decimalPoint: '.', decimals: 2, leadZeros: false }), 'should return 0');
  t.equal('0', fm1.from(0.000123, { decimalPoint: '.', decimals: 2, leadZeros: false }), 'should return 0');
  t.equal('-0.000123', fm1.from(-0.000123, { decimalPoint: '.', decimals: 9, leadZeros: false }), 'should return 0');
  t.equal('0.000123', fm1.from(0.000123, { decimalPoint: '.', decimals: 9, leadZeros: false }), 'should return 0');
  t.equal('-0.000123000', fm1.from(-0.000123, { decimalPoint: '.', decimals: 9, leadZeros: true }), 'should return -0.000123000');
  t.equal('0.000123000', fm1.from(0.000123, { decimalPoint: '.', decimals: 9, leadZeros: true }), 'should return 0.000123000');
  t.equal('0.000123', fm1.from(0.000123, { decimalPoint: '.', decimals: 9, leadZeros: false }), 'should return 0.000123');
  t.end();
});
