import { shallow } from 'enzyme'
import Select from 'components/common/Select'

describe('Select', () => {
  it('should render', () => {
    const wrapper = shallow(<Select />)
    expect(wrapper.exists()).toBe(true)
  })
})
