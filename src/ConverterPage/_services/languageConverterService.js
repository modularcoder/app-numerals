import utilsService from '@/_services/utilsService'

const languageConverterService = {
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
    if (!input) {
      throw new Error('Missin input')
    }

    // Should work only for string type inputs
    if (typeof input !== 'number') {
      throw new Error('The function input accepts only number types')
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
