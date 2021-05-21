import { shallow } from 'enzyme'
import SearchBar from 'components/common/SearchBar'
import Input from 'components/common/Input'
import * as nextRouter from 'next/router'

let mockGenName

jest.mock('next/router')

const mockPush = jest.fn((link) => link)

beforeEach(() => {
  mockGenName = jest.spyOn(nextRouter, 'useRouter').mockImplementation(() => ({
    query: { searchTerm: 'hello' },
    pathname: '',
    push: mockPush,
  }))
})

describe('SeachBar', () => {
  it('should handle the input correctly', () => {
    const wrapper = shallow(<SearchBar />)
    wrapper.find(Input).simulate('change', {
      target: {
        value: 'I am beautiful.',
      },
    })
    expect(wrapper.find(Input).props().value).toBe('I am beautiful.')
  })

  it('should submit and redirect', () => {
    const wrapper = shallow(<SearchBar />)
    wrapper.find(Input).simulate('change', {
      target: {
        value: 'I am beautiful.',
      },
    })
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn(),
    })
    expect(mockPush).toBeCalledWith('/browse/search?searchTerm=I am beautiful.&page=1')
  })
})
