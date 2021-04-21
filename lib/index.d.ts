export = number_format

type Ret = (number: number | string) => any

/**
 * number format
 * @param inputNumber the number that need format
 * @param optionalPrecision  precision  for the decimals 
 * @param optionalDigit digits of the separator
 * @param optionalSeparator used to separate numbers
 * @param optionalDecimalChar used to separate the decimal value
 * @returns  formatted string, if {inputNumber} is not a number or string, that will be that self
 */
declare function number_format(
  inputNumber: number | string,
  optionalPrecision?: number,
  optionalDigit?: number,
  optionalSeparator?: string,
  optionalDecimalChar?: string
): string


declare namespace number_format {
  function bindWith(precision?: number, digit?: number, separator?: string, decimalChar?: string): Ret
  function toFixed(num: number, precision?: number): number
}
