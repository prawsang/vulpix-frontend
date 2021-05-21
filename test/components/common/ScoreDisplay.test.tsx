import { shallow } from 'enzyme'
import ScoreDisplay from 'components/common/ScoreDisplay'
import { Text } from '@chakra-ui/react'

describe('ScoreDisplay', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ScoreDisplay score={76} />)
    expect(wrapper.find(Text).at(0).text()).toBe('76')
  })
})
