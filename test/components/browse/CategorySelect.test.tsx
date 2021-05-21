import { shallow } from 'enzyme'
import CategorySelect from 'components/browse/CategorySelect'

describe('CategorySelect', () => {
  it('should render', () => {
    const wrapper = shallow(<CategorySelect />)
    expect(wrapper.exists()).toBe(true)
  })
})
