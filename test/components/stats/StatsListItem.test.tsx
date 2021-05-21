import { shallow } from 'enzyme'
import StatsListItem from 'components/stats/StatsListItem'
import Link from 'components/common/Link'
import { Heading } from '@chakra-ui/react'

describe('StatsListItem', () => {
  it('should render correct with received props', () => {
    const wrapper = shallow(<StatsListItem name="Hello" link="/hello" />)
    expect(wrapper.find(Link).props().href).toBe('/hello')
    expect(wrapper.find(Heading).text()).toBe('Hello')
  })
})
