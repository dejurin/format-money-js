"use strict";
/*!
 * format-money-js v1.4.3
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatMoney = void 0;
class FormatMoney {
    constructor(options) {
        this.options = options;
        this.version = '1.3.3';
        this.defaults = {
            grouping: true,
            separator: ',',
            decimalPoint: '.',
            decimals: 0,
            symbol: '',
            append: false,
        };
        this.from = (number, options, parse = false) => {
            const opt = Object.assign(Object.assign({}, this.options), options);
            if (typeof number !== 'number')
                return undefined;
            const neg = (number < 0) ? '-' : '';
            let result;
            let x;
            let x1;
            let x2;
            let x3;
            let prefix;
            let suffix;
            result = Math.abs(number).toFixed(opt.decimals);
            result += '';
            x = result.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? opt.decimalPoint + x[1] : '';
            if (opt.grouping) {
                x3 = '';
                for (let i = 0, len = x1.length; i < len; i += 1) {
                    if (i !== 0 && (i % 3) === 0) {
                        x3 = opt.separator + x3;
                    }
                    x3 = x1[len - i - 1] + x3;
                }
                x1 = x3;
            }
            prefix = suffix = '';
            if (opt.append) {
                suffix = opt.symbol;
            }
            else {
                prefix = opt.symbol;
            }
            if (parse) {
                return {
                    source: number,
                    negative: (number < 0),
                    fullAmount: x1 + x2,
                    amount: x1,
                    decimals: x2,
                    symbol: opt.symbol,
                };
            }
            return neg + prefix + x1 + x2 + suffix;
        };
        this.un = (value, options) => {
            const opt = Object.assign(Object.assign({}, this.options), options);
            if (typeof value === 'number')
                return value;
            if (typeof value !== 'string')
                return undefined;
            // Build regex to strip out everything except digits, decimal point and minus sign:
            const regex = new RegExp(`[^0-9-${opt.decimalPoint}]`, 'g');
            const unformatted = parseFloat((value)
                .replace(/\((?=\d+)(.*)\)/, '-$1') // replace bracketed values with negatives
                .replace(regex, '') // strip out any cruft
                .replace(`${opt.decimalPoint}`, '.'));
            return !isNaN(unformatted) ? unformatted : 0;
        };
        this.options = Object.assign(Object.assign({}, this.defaults), options);
    }
}
exports.FormatMoney = FormatMoney;
//# sourceMappingURL=format-money.js.map