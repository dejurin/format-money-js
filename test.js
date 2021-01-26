const test = require('tape')

const { FormatMoney } = require('./dist/format-money.js');
const fm1 = new FormatMoney();

test('FormatMoney(): valid params', t => {
    t.equal('1', fm1.from(1, {}), 'should return 1')
    t.equal('1,20', fm1.from(1.2, {decimalPoint: ',', decimals: 2}), 'should return 1,20')
    t.equal('1.20', fm1.from(1.2, {decimalPoint: '.', decimals: 2}), 'should return 1.20')
    t.equal('1,000.20', fm1.from(1000.2, {decimalPoint: '.', decimals: 2, grouping: true}), 'should return 1,000.20')
    t.equal('1.000,20', fm1.from(1000.2, {decimalPoint: ',', decimals: 2, grouping: true, separator: '.'}), 'should return 1.000,20')
    t.equal('$1.000,20', fm1.from(1000.2, {decimalPoint: ',', decimals: 2, grouping: true, separator: '.', symbol: '$'}), 'should return $1.000,20')
    t.equal('1.000,20$', fm1.from(1000.2, {decimalPoint: ',', decimals: 2, grouping: true, separator: '.', symbol: '$', append: true}), 'should return 1.000,20$')
    t.equal('1.234.567.890.123.456,00$', fm1.from(1234567890123456, {decimalPoint: ',', decimals: 2, grouping: true, separator: '.', symbol: '$', append: true}), 'should return 1.234.567.890.123.456,00$')
    t.end()
})
