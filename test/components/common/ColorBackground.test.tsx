import { shallow } from 'enzyme'
import ColorBackground from 'components/common/ColorBackground'

describe('ColorBackground', () => {
  it('should render with the correct default props', () => {
    const wrapper = shallow(<ColorBackground image="/images/home-bg" />)
    expect(wrapper.props().width).toStrictEqual({ base: '120%', lg: '55%' })
    expect(wrapper.props().right).toEqual(0)
    expect(wrapper.props().transform).toEqual('translateY(-15%)')
    expect(wrapper.props().left).toEqual('initial')
  })

  it('should render with the correct style if provided', () => {
    const wrapper = shallow(
      <ColorBackground width="70%" side="left" top="translateY(-20%)" image="/images/home-bg" />,
    )
    expect(wrapper.props().width).toStrictEqual({ base: '120%', lg: '70%' })
    expect(wrapper.props().right).toEqual('initial')
    expect(wrapper.props().transform).toEqual('translateY(-20%)')
    expect(wrapper.props().left).toEqual(0)
  })
})
