import { shallow } from 'enzyme'
import Divider from 'components/common/Divider'

describe('Divider', () => {
  it('should render', () => {
    const wrapper = shallow(<Divider />)
    expect(wrapper.exists()).toBe(true)
  })
})
