/*!
 * FormatMoney.js v0.1.2
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
/**
 * @author Yurii Derevych <gkhelloworld@gmail.com>
 * @description Tiny JavaScript library by CurrencyRate.today,
 * providing simple and advanced number, money and currency formatting.
 * @example
 * let fm = new FormatMoney({decimals: 2});
 * fm.from(12345.67)
 * @public
 * @version 0.1.2
 * @license BSD-2-Clause
 */
export interface FormatMoneyOptions {
    grouping?: boolean;
    separator?: string;
    decimalPoint?: string;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}
export declare class FormatMoney {
    private options?;
    version: string;
    private defaults;
    constructor(options?: FormatMoneyOptions);
    from: (num: number) => string;
}
