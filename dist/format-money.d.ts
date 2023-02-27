/*!
 * format-money-js v1.6.3
 * (c) 2020-2023 Yurii Derevych
 * URL: https://github.com/dejurin/format-money-js
 * Sponsored:
 * https://cr.today/
 * https://currencyrate.today/
 * Released under the BSD-2-Clause License.
 */
export interface FormatMoneyOptions {
    grouping?: boolean;
    separator?: string;
    decimalPoint?: string;
    decimals?: number;
    symbol?: string;
    append?: boolean;
    leadZeros?: boolean;
}
export interface FormatMoneyParse {
    source: number;
    negative: boolean;
    fullAmount: string;
    amount: string;
    decimals: string;
    symbol: string;
}
export declare class FormatMoney {
    private options?;
    version: string;
    private defaults;
    constructor(options?: FormatMoneyOptions);
    from: (value: number, options?: FormatMoneyOptions | {}, parse?: boolean) => FormatMoneyParse | string | undefined;
    un: (value: (string | number), options: FormatMoneyOptions) => number | undefined;
}
