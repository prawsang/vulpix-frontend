import { shallow } from 'enzyme'
import Card from 'components/common/Card'

describe('Card', () => {
  it('should render children', () => {
    const wrapper = shallow(<Card>Hello</Card>)
    expect(wrapper.text()).toBe('Hello')
  })
})
