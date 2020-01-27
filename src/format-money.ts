/*!
 * format-money-js v1.1.3
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */

export interface FormatMoneyOptions { // (default)
  grouping?: boolean; // Example: 1,000 vs 1000 (true)
  separator?: string; // Grouping separator (,)
  decimalPoint?: string; // Sets the separator for the decimal point.
  decimals?: number; // Sets the number of decimal points.
  prefix?: string; // Text prepended to result
  suffix?: string; // Text appended to result
}

export class FormatMoney {

  version = '1.1.3';
  private defaults: FormatMoneyOptions = {
    grouping: true,
    separator: ',',
    decimalPoint: '.',
    decimals: 0,
    prefix: '',
    suffix: ''
  };

  constructor(
    private options?: FormatMoneyOptions
  ) {
    this.options = {
      ...this.defaults,
      ...options
    };
  }

  from = (num: number, options: FormatMoneyOptions): string => {
    options = {
      ...this.options,
      ...options
    };
    const neg = (num < 0) ? '-' : '';
    let result: string,
      x: string[],
      x1: string,
      x2: string,
      x3: string;
    result = Math.abs(num).toFixed(options.decimals);
    result += '';
    x = result.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? options.decimalPoint + x[1] : '';
    if (options.grouping) {
      x3 = '';
      for (let i = 0, len = x1.length; i < len; ++i) {
        if (i !== 0 && (i % 3) === 0) {
          x3 = options.separator + x3;
        }
        x3 = x1[len - i - 1] + x3;
      }
      x1 = x3;
    }
    return neg + options.prefix + x1 + x2 + options.suffix;
  }

}