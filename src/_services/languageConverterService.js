import utilsService from '@/_services/utilsService'

const ones = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]
const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
]
const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]

const languageConverterService = {
  /**
   * @param {number} num
   * @param {object} options
   * @param {boolean} options.capitalize
   * @returns {string}
   *
   * This function converts the numerical input to corresponding English numeral
   * References: https://en.wikipedia.org/wiki/English_numerals
   *
   * This solution is referenced from
   * https://stackoverflow.com/a/5530230/1675860
   *
   */
  numberToEnglishNumeral(num, { capitalize } = { capitalize: false }) {
    //   Missing input
    if (typeof num === 'undefined') {
      throw new Error('Missin input')
    }

    // Should work only for string type inputs
    if (typeof num !== 'number') {
      throw new Error('The function input accepts only number types')
    }

    // Start converting millions first
    function convertMillions(num) {
      if (num >= 1000000) {
        return (
          convertMillions(Math.floor(num / 1000000)) +
          ' million ' +
          convertThousands(num % 1000000)
        )
      }
      // Number is less than million, convert thousands
      else {
        return convertThousands(num)
      }
    }

    function convertThousands(num) {
      if (num >= 1000) {
        return (
          convertHundreds(Math.floor(num / 1000)) +
          ' thousand ' +
          convertHundreds(num % 1000)
        )
      } else {
        return convertHundreds(num)
      }
    }

    function convertHundreds(num) {
      if (num > 99) {
        return (
          ones[Math.floor(num / 100)] + ' hundred and ' + convertTens(num % 100)
        )
      } else {
        return convertTens(num)
      }
    }

    function convertTens(num) {
      if (num < 10) {
        return ones[num]
      } else if (num >= 10 && num < 20) {
        return teens[num - 10]
      } else {
        return tens[Math.floor(num / 10)] + '-' + ones[num % 10]
      }
    }

    let result = ''

    if (num === 0) {
      result = 'zero'
    } else {
      result = convertMillions(num)
    }

    // Trim the tail spacing
    result = result.trim()

    if (capitalize) {
      return utilsService.capitalize(result)
    } else {
      return result
    }
  },
}

export default languageConverterService
