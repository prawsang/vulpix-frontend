import { shallow } from 'enzyme'
import Table from 'components/common/Table'
import { Thead, Tbody, Tfoot } from '@chakra-ui/react'

const columns = [
  {
    name: 'Oneone',
    key: 'one',
  },
  {
    name: 'Twotwo',
    key: 'two',
    render: (row) => (
      <div>
        {row.three}-{row.two}
      </div>
    ),
  },
]

const data = [
  {
    one: 1,
    two: 2,
    three: 3,
  },
  {
    one: 4,
    two: 5,
    three: 6,
  },
]

describe('Table', () => {
  it('should render columns', () => {
    const wrapper = shallow(<Table columns={columns} rows={data} />)
    expect(wrapper.find(Thead).childAt(0).children()).toHaveLength(2)
    expect(wrapper.find(Thead).childAt(0).childAt(0).text()).toEqual('Oneone')
    expect(wrapper.find(Thead).childAt(0).childAt(1).text()).toEqual('Twotwo')
  })
  it('should render rows', () => {
    const wrapper = shallow(<Table columns={columns} rows={data} />)
    expect(wrapper.find(Tbody).children()).toHaveLength(2)
    expect(wrapper.find(Tbody).childAt(0).childAt(0).text()).toEqual('1')
    expect(wrapper.find(Tbody).childAt(0).childAt(1).text()).toEqual('3-2')
    expect(wrapper.find(Tbody).childAt(1).childAt(0).text()).toEqual('4')
    expect(wrapper.find(Tbody).childAt(1).childAt(1).text()).toEqual('6-5')
  })
  it('should display "No Data" if there is no data', () => {
    const wrapper = shallow(<Table columns={columns} rows={[]} />)
    expect(wrapper.find(Tbody).childAt(0).childAt(0).childAt(0).text()).toEqual('Not found')
  })
  it('should hide footer, if specified', () => {
    const wrapper = shallow(<Table columns={columns} rows={[]} showFooter={false} />)
    expect(wrapper.find(Tfoot).exists()).toBe(false)
  })
})
