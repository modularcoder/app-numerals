import { mount } from '@vue/test-utils'
import ConverterPage from './ConverterPage.vue'

describe('ConverterPage.vue', () => {
  it('renders without crashing', () => {
    const wrapper = mount(ConverterPage)

    expect(wrapper.exists()).toBe(true)
  })

  it('converts number to string', async () => {
    const wrapper = mount(ConverterPage)

    await wrapper.setData({ input: 10 })
    await wrapper.find('button').trigger('click')

    const result = wrapper.find('.Result')

    expect(result.text()).toBe('Ten')
  })
})
