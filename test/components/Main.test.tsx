import { shallow } from 'enzyme'
import Main from 'components/Main'

describe('Main', () => {
  it('should render children', () => {
    const wrapper = shallow(<Main>Hello</Main>)
    expect(wrapper.text()).toBe('Hello')
  })
})
