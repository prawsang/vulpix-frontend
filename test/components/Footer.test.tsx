import { shallow } from 'enzyme'
import Footer from 'components/Footer'

describe('Footer', () => {
  it('should render', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.exists()).toBe(true)
  })
})
