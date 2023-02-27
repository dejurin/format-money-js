"use strict";
/*!
 * format-money-js v1.6.3
 * (c) 2020-2023 Yurii Derevych
 * URL: https://github.com/dejurin/format-money-js
 * Sponsored:
 * https://cr.today/
 * https://currencyrate.today/
 * Released under the BSD-2-Clause License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatMoney = void 0;
class FormatMoney {
    constructor(options) {
        this.options = options;
        this.version = '1.6.3';
        this.defaults = {
            grouping: true,
            separator: ',',
            decimalPoint: '.',
            decimals: 0,
            symbol: '',
            append: false,
            leadZeros: true,
        };
        // Format
        this.from = (value, options = {}, parse = false) => {
            // Merge custom options
            const customOptions = Object.assign(Object.assign({}, this.options), options);
            // If value not number return undefined
            if (typeof value !== 'number')
                return undefined;
            // If value is NaN
            if (Number.isNaN(value))
                return undefined;
            // Set a sign for negative number
            let negativeSign = (value < 0) ? '-' : '';
            let result;
            let left;
            let body;
            let prefix = '';
            let suffix = '';
            result = Math.abs(value).toFixed(customOptions.decimals);
            if (parseFloat(result) === 0 || result === '0') {
                negativeSign = '';
            }
            if (!customOptions.leadZeros) {
                const resultFloat = parseFloat(result);
                result = resultFloat.toString();
            }
            const resultArr = result.split('.');
            [left] = resultArr;
            const right = resultArr.length > 1 ? customOptions.decimalPoint + resultArr[1] : '';
            if (customOptions.grouping) {
                body = '';
                for (let i = 0, len = left.length; i < len; i += 1) {
                    if (i !== 0 && (i % 3) === 0) {
                        body = customOptions.separator + body;
                    }
                    body = left[len - i - 1] + body;
                }
                left = body;
            }
            if (customOptions.append) {
                suffix = customOptions.symbol;
            }
            else {
                prefix = customOptions.symbol;
            }
            if (parse) {
                return {
                    source: value,
                    negative: (value < 0),
                    fullAmount: left + right,
                    amount: left,
                    decimals: right,
                    symbol: customOptions.symbol,
                };
            }
            return negativeSign + prefix + left + right + suffix;
        };
        // Unformat
        this.un = (value, options) => {
            // Merge custom options
            const customOptions = Object.assign(Object.assign({}, this.options), options);
            if (typeof value === 'number')
                return value;
            if (typeof value !== 'string')
                return undefined;
            // Build regex to strip out everything except digits, decimal point and minus sign:
            const regex = new RegExp(`[^0-9-${customOptions.decimalPoint}]`, 'g');
            const unFormatted = parseFloat((value)
                .replace(/\((?=\d+)(.*)\)/, '-$1') // replace bracketed values with negatives
                .replace(regex, '') // strip out any cruft
                .replace(`${customOptions.decimalPoint}`, '.'));
            return !Number.isNaN(unFormatted) ? unFormatted : 0;
        };
        // Merge options
        this.options = Object.assign(Object.assign({}, this.defaults), options);
    }
}
exports.FormatMoney = FormatMoney;
//# sourceMappingURL=format-money.js.map