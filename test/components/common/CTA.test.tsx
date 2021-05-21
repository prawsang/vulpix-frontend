import { shallow } from 'enzyme'
import CTA from 'components/common/CTA'

describe('CTA', () => {
  it('should render', () => {
    const wrapper = shallow(<CTA />)
    expect(wrapper.exists()).toBe(true)
  })
})
