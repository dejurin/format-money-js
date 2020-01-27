/*!
 * format-money-js v1.2.0
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
export interface FormatMoneyOptions {
    grouping?: boolean;
    separator?: string;
    decimalPoint?: string;
    decimals?: number;
    symbol?: string;
    append?: boolean;
}
export declare class FormatMoney {
    private options?;
    version: string;
    private defaults;
    constructor(options?: FormatMoneyOptions);
    from: (num: number, options: FormatMoneyOptions) => string;
}
