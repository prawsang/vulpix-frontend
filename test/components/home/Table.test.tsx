import { shallow } from 'enzyme'
import Table from 'components/home/Table'

const data = [
  {
    name: 'plakim',
    identifier: 'com.plakim',
    categorySlug: 'social',
    vulpixScore: 80,
    devName: 'prawsang',
  },
]

describe('Table', () => {
  it('should render', () => {
    const wrapper = shallow(<Table data={data} />)
    expect(wrapper.exists()).toBe(true)
  })
})
