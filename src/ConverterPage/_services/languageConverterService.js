import utilsService from '@/_services/utilsService'

const englishNumerals = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}

const languageConverterService = {
  englishNumerals,
  /**
   * @param {number} input
   * @param {object} options
   * @param {boolean} options.capitalize
   * @returns {string}
   *
   * This function converts the numerical input to corresponding English numeral
   * References: https://en.wikipedia.org/wiki/English_numerals
   */
  numberToEnglishNumeral(input, { capitalize } = { capitalize: true }) {
    //   Missing input
    if (typeof input === 'undefined') {
      throw new Error('Missin input')
    }

    // Should work only for string type inputs
    if (typeof input !== 'number') {
      throw new Error('The function input accepts only number types')
    }

    if (englishNumerals[input]) {
      return englishNumerals[input]
    }

    let result = ''

    result = result + input

    if (capitalize) {
      return utilsService.capitalize(result)
    } else {
      return result
    }
  },
}

export default languageConverterService
