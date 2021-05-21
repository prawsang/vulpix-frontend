import { shallow } from 'enzyme'
import StatCategoryList from 'components/stats/StatCategoryList'
import { Heading } from '@chakra-ui/react'

describe('StatCategoryList', () => {
  it('should render with default heading', () => {
    const wrapper = shallow(<StatCategoryList />)
    expect(wrapper.find(Heading).text()).toBe('Browse Statistics By Category')
  })
  it('should render provided heading', () => {
    const wrapper = shallow(<StatCategoryList heading="plakim" />)
    expect(wrapper.find(Heading).text()).toBe('plakim')
  })
})
