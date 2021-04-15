import languageConverterService from './languageConverterService'

describe('languageConverterService.numberToEnglishNumeral', () => {
  const numberToEnglishNumeral = languageConverterService.numberToEnglishNumeral

  it('converts to English numerals', () => {
    expect(numberToEnglishNumeral(0)).toBe('zero')
    expect(numberToEnglishNumeral(1)).toBe('one')
    expect(numberToEnglishNumeral(10)).toBe('ten')
    expect(numberToEnglishNumeral(11)).toBe('eleven')
    expect(numberToEnglishNumeral(55)).toBe('fifty-five')
    expect(numberToEnglishNumeral(123)).toBe('one hundred and twenty-three')
    expect(numberToEnglishNumeral(1234)).toBe(
      'one thousand two hundred and thirty-four',
    )
    expect(numberToEnglishNumeral(85000)).toBe('eighty-five thousand')
  })

  it('capitalizes the output', () => {
    expect(numberToEnglishNumeral(85000)).toBe('Eighty-five thousand')
  })

  it('throws an error if there is no input', () => {
    expect(() => numberToEnglishNumeral()).toThrowError()
  })

  it('throws an error if there is wrong type inpyt', () => {
    expect(() => numberToEnglishNumeral({ wrong: 'inputw' })).toThrowError()
  })
})
