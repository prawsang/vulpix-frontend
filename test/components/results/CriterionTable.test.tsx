import { shallow } from 'enzyme'
import CriterionTable from 'components/results/CriterionTable'
import { Heading } from '@chakra-ui/react'

const results1 = {
  androidId: false,
  name: false,
  age: false,
  imei: false,
}

describe('CriterionTable', () => {
  it('should show correct ame.', () => {
    const wrapper = shallow(<CriterionTable name="Plakim" results={results1} />)
    expect(wrapper.find(Heading).at(0).text()).toBe('Plakim')
  })

  it('should show correct results if nothing is detected', () => {
    const wrapper = shallow(<CriterionTable name="plakim" results={results1} />)
    expect(wrapper.find(Heading).at(1).text()).toBe('Not Detected During Testing')
  })
})
