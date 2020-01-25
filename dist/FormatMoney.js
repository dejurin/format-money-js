"use strict";
/*!
 * FormatMoney.js v0.1.2
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class FormatMoney {
    constructor(options) {
        this.options = options;
        this.version = '0.1.2';
        this.defaults = {
            grouping: true,
            separator: ',',
            decimalPoint: '.',
            decimals: 0,
            prefix: '',
            suffix: ''
        };
        // default format and easing functions
        this.from = (num) => {
            const neg = (num < 0) ? '-' : '';
            let result, x, x1, x2, x3;
            result = Math.abs(num).toFixed(this.options.decimals);
            result += '';
            x = result.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? this.options.decimalPoint + x[1] : '';
            if (this.options.grouping) {
                x3 = '';
                for (let i = 0, len = x1.length; i < len; ++i) {
                    if (i !== 0 && (i % 3) === 0) {
                        x3 = this.options.separator + x3;
                    }
                    x3 = x1[len - i - 1] + x3;
                }
                x1 = x3;
            }
            return neg + this.options.prefix + x1 + x2 + this.options.suffix;
        };
        this.options = Object.assign(Object.assign({}, this.defaults), options);
    }
}
exports.FormatMoney = FormatMoney;
//# sourceMappingURL=FormatMoney.js.map