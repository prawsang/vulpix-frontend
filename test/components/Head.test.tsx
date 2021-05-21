import { shallow } from 'enzyme'
import Head from 'components/Head'

describe('Head', () => {
  it('should render with page name', () => {
    const wrapper = shallow(<Head pageName="Plakim" />)
    expect(wrapper.find('title').text()).toBe('Plakim | VULPIX II')
  })
})
