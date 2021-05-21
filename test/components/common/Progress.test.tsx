import { shallow } from 'enzyme'
import Progress from 'components/common/Progress'
import { Box } from '@chakra-ui/react'

describe('Progress', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Progress value={76} colorScheme="primary.500" />)
    expect(wrapper.find(Box).at(2).props().width).toBe('76%')
    expect(wrapper.find(Box).at(2).props().bg).toBe('primary.500')
  })
})
