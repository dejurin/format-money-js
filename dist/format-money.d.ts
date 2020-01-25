/*!
 * format-money-js v0.2.5
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
export declare class FormatMoney {
    private options?;
    version: string;
    private defaults;
    constructor(options?: FormatMoneyOptions);
    from: (num: number) => string;
}
