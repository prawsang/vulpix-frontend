import { shallow } from 'enzyme'
import Link from 'components/common/Link'

describe('Link', () => {
  it('should render children', () => {
    const wrapper = shallow(<Link href="/">Hello</Link>)
    expect(wrapper.dive().text()).toBe('Hello')
  })
})
