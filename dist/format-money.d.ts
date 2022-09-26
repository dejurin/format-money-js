/*!
 * format-money-js v1.5.0
 * (c) 2020-2022 Yurii Derevych
 * Sponsored by https://currencyrate.today/
 * Released under the BSD-2-Clause License.
 */
export interface FormatMoneyOptions {
    grouping?: boolean;
    separator?: string;
    decimalPoint?: string;
    decimals?: number;
    symbol?: string;
    append?: boolean;
    leadZeros: boolean;
}
export interface FormatMoneyParse {
    source?: number;
    negative?: boolean;
    fullAmount?: string;
    amount?: string;
    decimals?: string;
    symbol?: string;
}
export declare class FormatMoney {
    private options?;
    version: string;
    private defaults;
    constructor(options?: FormatMoneyOptions);
    from: (number: number, options: FormatMoneyOptions, parse?: boolean) => string | number | FormatMoneyParse | undefined;
    un: (value: (string | number), options: FormatMoneyOptions) => number | undefined;
}
