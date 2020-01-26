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

export function FormatMoney(num: number, options: FormatMoneyOptions): string {
  options = {
    ...{
      grouping: true,
      separator: ',',
      decimalPoint: '.',
      decimals: 0,
      prefix: '',
      suffix: ''
    },
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