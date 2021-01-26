/*!
 * format-money-js v1.4.0
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
export interface FormatMoneyFragment {
    negative?: boolean;
    amount?: string;
    decimals?: string;
    symbol?: string;
}
export declare class FormatMoney {
    private options?;
    version: string;
    private defaults;
    constructor(options?: FormatMoneyOptions);
    from: (number: number, options: FormatMoneyOptions, fragment?: boolean) => string | number | FormatMoneyFragment;
    un: (value: (string | number), options: FormatMoneyOptions) => number;
}
