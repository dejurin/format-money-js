const test = require('tape');

const { FormatMoney } = require('./dist/format-money');

const fm1 = new FormatMoney();

test('FormatMoney(): valid params', (t) => {
  t.equal(1000, fm1.un('1,000', {}), 'should return 1000');
  t.equal(1000, fm1.un('1,000.00', {}), 'should return 1000');
  t.equal(1000000, fm1.un('1,000,000.00', {}), 'should return 1000000');
  t.equal(1, fm1.un('1.000.000.00', {}), 'should return 1');
  t.equal(12345, fm1.un('12345.', {}), 'should return 12345');
  t.end();
});
