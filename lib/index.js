"use strict"

function numberFormat(inputNumber, optionalPrecision, optionalDigit, optionalSeparator, optionalDecimalChar) {
  let number, stringNumber, decimal
  const separator = optionalSeparator || ","
  const decimalChar = optionalDecimalChar || "."
  const digit = optionalDigit || 3
  const needPrecision = typeof optionalPrecision === "number" && optionalPrecision >= 0

  switch (typeof inputNumber) {
    case "string":
      inputNumber = inputNumber.replace("_", "")
      if (inputNumber.length < (inputNumber[0] === "-" ? digit + 2 : digit + 1)) {
        return String(_toFixed(Number(inputNumber), optionalPrecision).replace(".", decimalChar))
      }
      number = needPrecision ? _toFixed(Number(inputNumber), optionalPrecision) : Number(inputNumber)
      stringNumber = String(number)
      break
    case "number":
      number = needPrecision ? _toFixed(Number(inputNumber), optionalPrecision) : Number(inputNumber)
      stringNumber = String(number)
      break
    default:
      return inputNumber
  }

  if (number < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < number) {
    console.warn(`"${inputNumber}" is not safe`)
    return `${inputNumber}`
  }

  if ((-Math.pow(10, digit) < number && number < Math.pow(10, digit)) || isNaN(number) || !isFinite(number)) {
    return String(stringNumber).replace(".", decimalChar)
  }
  let decimalIndex = stringNumber.lastIndexOf(".")

  if (decimalIndex > -1) {
    decimal = stringNumber.slice(decimalIndex)
    stringNumber = stringNumber.slice(0, -decimal.length)
  }

  stringNumber = parse(stringNumber, separator, digit)
  return decimal ? stringNumber + decimal.replace(".", decimalChar) : stringNumber.replace(".", decimalChar)
}

function parse(stringNumber, separator, digit) {
  const start = stringNumber[0] === "-" ? 1 : 0
  const count = stringNumber.length - start - 1
  let i = (count % digit) + 1 + start
  const strings = [stringNumber.slice(0, i)]

  while (i < stringNumber.length) {
    strings.push(stringNumber.substr(i, digit))
    i += digit
  }

  return strings.join(separator)
}

function _toFixed(num, precision) {
  const m = precision || 0
  if (typeof num !== "number") {
    throw new Error("Invalid type")
  }
  let result = String(Math.round(Math.pow(10, m) * num) / Math.pow(10, m))
  if (result.indexOf(".") == -1) {
    if (m != 0) {
      result += "."
      result += new Array(m + 1).join("0")
    }
  } else {
    let arr = result.split(".")
    if (arr[1].length < m) {
      arr[1] += new Array(m - arr[1].length + 1).join("0")
    }
    result = arr.join(".")
  }
  return result
}

function bindWith(precision, digit, separator, decimalChar) {
  return function (number) {
    return numberFormat(number, precision, digit, separator, decimalChar)
  }
}

module.exports = numberFormat
module.exports.bindWith = bindWith
module.exports.toFixed = _toFixed
