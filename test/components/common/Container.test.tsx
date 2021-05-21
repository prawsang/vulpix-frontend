import { shallow } from 'enzyme'
import Container from 'components/common/Container'

describe('Container', () => {
  it('should render with the default max-width, if none provided', () => {
    const wrapper = shallow(<Container />)
    expect(wrapper.props().maxW).toEqual('1100px')
  })

  it('should render with the provided max-width, if provided', () => {
    const wrapper = shallow(<Container maxWidth="500px" />)
    expect(wrapper.props().maxW).toEqual('500px')
  })

  it('should render children', () => {
    const wrapper = shallow(<Container maxWidth="500px">Hello</Container>)
    expect(wrapper.text()).toBe('Hello')
  })
})
