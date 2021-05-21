import { shallow } from 'enzyme'
import Nav from 'components/Nav'
import { Heading } from '@chakra-ui/react'
import Link from 'components/common/Link'

describe('Nav', () => {
  it('should render with the correct colors from default', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.find(Heading).props().color).toBe('primary.500')
    expect(wrapper.find(Link).at(1).props().color).toStrictEqual({
      base: 'gray.500',
      md: 'gray.500',
    })
  })

  it('should render with the correct colors if provided', () => {
    const wrapper = shallow(<Nav logoColor="error.500" menuColor="warning.500" />)
    expect(wrapper.find(Heading).props().color).toBe('error.500')
    expect(wrapper.find(Link).at(1).props().color).toStrictEqual({
      base: 'gray.500',
      md: 'warning.500',
    })
  })
})
