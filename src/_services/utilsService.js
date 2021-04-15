const utilsService = {
  /**
   * Capitalizes the string input
   * @param {string} input
   * @returns {string}
   */
  capitalize(input) {
    if (!input) {
      return input
    }

    return input.charAt(0).toUpperCase() + name.slice(1)
  },
}

export default utilsService
