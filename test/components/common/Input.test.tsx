import { shallow } from 'enzyme'
import Input from 'components/common/Input'

describe('Input', () => {
  it('should render', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.exists()).toBe(true)
  })
})
