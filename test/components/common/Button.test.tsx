import { shallow } from 'enzyme'
import Button from 'components/common/Button'

describe('Button', () => {
  it('should render with the correct colors for default variant', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.props().boxShadow).toBe('0 6px 16px rgba(255,30,5,0.5) !important')
    expect(wrapper.props()._hover).toStrictEqual({ bg: 'primary.500' })
    expect(wrapper.props()._active).toStrictEqual({ bg: 'primary.500' })
  })

  it('should render with the correct colors for secondary variant', () => {
    const wrapper = shallow(<Button variant="secondary" />)
    expect(wrapper.props().boxShadow).toBe('none')
    expect(wrapper.props()._hover).toStrictEqual({ bg: 'gray.300' })
    expect(wrapper.props()._active).toStrictEqual({ bg: 'gray.300' })
  })

  it('should render with the correct colors and disable the button if it is disabled', () => {
    const wrapper = shallow(<Button disabled />)
    expect(wrapper.props().boxShadow).toBe('none')
    expect(wrapper.props()._hover).toStrictEqual({ bg: 'gray.300' })
    expect(wrapper.props()._active).toStrictEqual({ bg: 'gray.300' })
    expect(wrapper.props().disabled).toBeTruthy()
  })

  it('should render children', () => {
    const wrapper = shallow(<Button>Hello</Button>)
    expect(wrapper.text()).toBe('Hello')
  })
})
