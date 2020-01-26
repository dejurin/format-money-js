/*!
 * format-money-js v1.0.0
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
export interface FormatMoneyOptions {
    grouping?: boolean;
    separator?: string;
    decimalPoint?: string;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}
export declare function FormatMoney(num: number, options: FormatMoneyOptions): string;
