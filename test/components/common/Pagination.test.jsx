import { shallow } from 'enzyme'
import Pagination from 'components/common/Pagination'
import * as nextRouter from 'next/router'

let mockGenName

jest.mock('next/router')

beforeEach(() => {
  mockGenName = jest.spyOn(nextRouter, 'useRouter').mockImplementation(() => ({
    query: { page: 2 },
    pathname: '',
  }))
})

describe('Pagination', () => {
  it('should render pages correctly and highlight the current page', () => {
    const wrapper = shallow(<Pagination currentPage={1} totalPages={10} />)
    expect(wrapper.children()).toHaveLength(7)
    expect(wrapper.childAt(1).dive().dive().text()).toBe('1')
    expect(wrapper.childAt(2).dive().dive().text()).toBe('2')
    expect(wrapper.childAt(3).dive().dive().text()).toBe('3')
    expect(wrapper.childAt(4).dive().dive().text()).toBe('4')
    expect(wrapper.childAt(5).dive().dive().text()).toBe('5')

    expect(wrapper.childAt(1).dive().dive().props().color).toBe('primary.500')
  })

  it('should render pages correctly and highlight the current page', () => {
    const wrapper = shallow(<Pagination currentPage={3} totalPages={3} />)
    expect(wrapper.children()).toHaveLength(5)
    expect(wrapper.childAt(1).dive().dive().text()).toBe('1')
    expect(wrapper.childAt(2).dive().dive().text()).toBe('2')
    expect(wrapper.childAt(3).dive().dive().text()).toBe('3')

    expect(wrapper.childAt(3).dive().dive().props().color).toBe('primary.500')
  })

  it('should render pages correctly and highlight the current page', () => {
    const wrapper = shallow(<Pagination currentPage={10} totalPages={10} />)
    expect(wrapper.children()).toHaveLength(7)
    expect(wrapper.childAt(1).dive().dive().text()).toBe('6')
    expect(wrapper.childAt(2).dive().dive().text()).toBe('7')
    expect(wrapper.childAt(3).dive().dive().text()).toBe('8')
    expect(wrapper.childAt(4).dive().dive().text()).toBe('9')
    expect(wrapper.childAt(5).dive().dive().text()).toBe('10')

    expect(wrapper.childAt(5).dive().dive().props().color).toBe('primary.500')
  })
})
