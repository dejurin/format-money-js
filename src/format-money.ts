/*!
 * format-money-js v1.6.3
 * (c) 2020-2023 Yurii Derevych
 * URL: https://github.com/dejurin/format-money-js
 * Sponsored:
 * https://cr.today/
 * https://currencyrate.today/
 * Released under the BSD-2-Clause License.
 */

export interface FormatMoneyOptions { // (default)
  grouping?: boolean; // Example: 1,000 vs 1000 (true)
  separator?: string; // Grouping separator (,)
  decimalPoint?: string; // Sets the separator for the decimal point.
  decimals?: number; // Sets the number of decimal points.
  symbol?: string;
  append?: boolean;
  leadZeros?: boolean;
}

export interface FormatMoneyParse { // Parse
  source: number;
  negative: boolean;
  fullAmount: string;
  amount: string;
  decimals: string;
  symbol: string;
}

export class FormatMoney {
  version = '1.6.3';

  private defaults: FormatMoneyOptions = {
    grouping: true,
    separator: ',',
    decimalPoint: '.',
    decimals: 0,
    symbol: '',
    append: false,
    leadZeros: true,
  };

  constructor(
    private options?: FormatMoneyOptions,
  ) {
    // Merge options
    this.options = {
      ...this.defaults,
      ...options,
    };
  }

  // Format
  from = (
    value: number,
    options: FormatMoneyOptions | {} = {},
    parse: boolean = false,
  ): FormatMoneyParse | string | undefined => {
    // Merge custom options
    const customOptions = {
      ...this.options,
      ...options,
    };

    // If value not number return undefined
    if (typeof value !== 'number') return undefined;
    // If value is NaN
    if (Number.isNaN(value)) return undefined;

    // Set a sign for negative number
    let negativeSign: string = (value < 0) ? '-' : '';
    let result: string;
    let left: string;
    let body: string;
    let prefix: string = '';
    let suffix: string = '';

    result = Math.abs(value).toFixed(customOptions.decimals);
    if (parseFloat(result) === 0 || result === '0') {
      negativeSign = '';
    }

    if (!customOptions.leadZeros) {
      const resultFloat = parseFloat(result);
      result = resultFloat.toString();
    }

    const resultArr: string[] = result.split('.');
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
      suffix = customOptions.symbol as string;
    } else {
      prefix = customOptions.symbol as string;
    }
    if (parse) {
      return {
        source: value,
        negative: (value < 0),
        fullAmount: left + right,
        amount: left,
        decimals: right,
        symbol: customOptions.symbol as string,
      };
    }
    return negativeSign + prefix + left + right + suffix;
  }

  // Unformat
  un = (value: (string | number), options: FormatMoneyOptions): number | undefined => {
    // Merge custom options
    const customOptions = {
      ...this.options,
      ...options,
    };

    if (typeof value === 'number') return value;
    if (typeof value !== 'string') return undefined;

    // Build regex to strip out everything except digits, decimal point and minus sign:
    const regex: RegExp = new RegExp(`[^0-9-${customOptions.decimalPoint}]`, 'g');
    const unFormatted = parseFloat(
      (value)
        .replace(/\((?=\d+)(.*)\)/, '-$1') // replace bracketed values with negatives
        .replace(regex, '') // strip out any cruft
        .replace(`${customOptions.decimalPoint}`, '.'), // make sure decimal point is standard
    );

    return !Number.isNaN(unFormatted) ? unFormatted : 0;
  }
}
