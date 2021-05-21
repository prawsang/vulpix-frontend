import { shallow } from 'enzyme'
import CategoryCard from 'components/browse/CategoryCard'
import Link from 'components/common/Link'
import { Heading } from '@chakra-ui/react'

describe('CategoryCard', () => {
  it('should render correct with received props', () => {
    const wrapper = shallow(<CategoryCard name="Hello" link="/hello" />)
    expect(wrapper.find(Link).props().href).toBe('/hello')
    expect(wrapper.find(Heading).text()).toBe('Hello')
  })
})
