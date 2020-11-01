/*!
 * format-money-js v1.3.0
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */

export interface FormatMoneyOptions { // (default)
  grouping?: boolean; // Example: 1,000 vs 1000 (true)
  separator?: string; // Grouping separator (,)
  decimalPoint?: string; // Sets the separator for the decimal point.
  decimals?: number; // Sets the number of decimal points.
  symbol?: string;
  append?: boolean;
}

export class FormatMoney {

  version = '1.3.0';
  private defaults: FormatMoneyOptions = {
    grouping: true,
    separator: ',',
    decimalPoint: '.',
    decimals: 0,
    symbol: '',
    append: false,
  };

  constructor(
    private options?: FormatMoneyOptions,
  ) {
    this.options = {
      ...this.defaults,
      ...options,
    };
  }

  from = (number: number, options: FormatMoneyOptions): string | number => {
    const opt = {
      ...this.options,
      ...options,
    };

    if (typeof number === 'string') return number;

    const neg = (number < 0) ? '-' : '';

    let result: string;
    let x: string[];
    let x1: string;
    let x2: string;
    let x3: string;
    let prefix: string;
    let suffix: string;

    result = Math.abs(number).toFixed(opt.decimals);
    result += '';
    x = result.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? opt.decimalPoint + x[1] : '';
    if (opt.grouping) {
      x3 = '';
      for (let i = 0, len = x1.length; i < len; i += 1) {
        if (i !== 0 && (i % 3) === 0) {
          x3 = opt.separator + x3;
        }
        x3 = x1[len - i - 1] + x3;
      }
      x1 = x3;
    }
    prefix = suffix = '';
    if (opt.append) {
      suffix = opt.symbol;
    } else {
      prefix = opt.symbol;
    }
    return neg + prefix + x1 + x2 + suffix;
  }

  un = (value: (string | number), options: FormatMoneyOptions): number => {
    const opt = {
      ...this.options,
      ...options,
    };

    const val: (string | number) = value || 0;

    if (typeof val === 'number') return val;

    // Build regex to strip out everything except digits, decimal point and minus sign:
    const regex: RegExp = new RegExp(`[^0-9-${opt.decimalPoint}]`, 'g');
    const unformatted = parseFloat(
      (val)
        .replace(/\((?=\d+)(.*)\)/, '-$1')    // replace bracketed values with negatives
        .replace(regex, '')                   // strip out any cruft
        .replace(opt.decimalPoint, '.'),  // make sure decimal point is standard
    );

    return !isNaN(unformatted) ? unformatted : 0;
  }

}
