import { FormatMoney } from './dist/FormatMoney.js';

const fm = new FormatMoney({decimals: 2});
console.log(fm.from(12345.67));