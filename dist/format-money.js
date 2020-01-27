"use strict";
/*!
 * format-money-js v1.1.4
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class FormatMoney {
    constructor(options) {
        this.options = options;
        this.version = '1.1.4';
        this.defaults = {
            grouping: true,
            separator: ',',
            decimalPoint: '.',
            decimals: 0,
            prefix: '',
            suffix: ''
        };
        this.from = (num, options) => {
            options = Object.assign(Object.assign({}, this.options), options);
            const neg = (num < 0) ? '-' : '';
            let result, x, x1, x2, x3;
            result = Math.abs(num).toFixed(options.decimals);
            result += '';
            x = result.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? options.decimalPoint + x[1] : '';
            if (options.grouping) {
                x3 = '';
                for (let i = 0, len = x1.length; i < len; ++i) {
                    if (i !== 0 && (i % 3) === 0) {
                        x3 = options.separator + x3;
                    }
                    x3 = x1[len - i - 1] + x3;
                }
                x1 = x3;
            }
            return neg + options.prefix + x1 + x2 + options.suffix;
        };
        this.options = Object.assign(Object.assign({}, this.defaults), options);
    }
}
exports.FormatMoney = FormatMoney;
//# sourceMappingURL=format-money.js.map