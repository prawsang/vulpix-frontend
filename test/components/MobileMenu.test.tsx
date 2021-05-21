import { shallow } from 'enzyme'
import MobileMenu from 'components/MobileMenu'
import { Button, Icon, Drawer } from '@chakra-ui/react'

describe('MobileMenu', () => {
  it('should open menu', () => {
    const wrapper = shallow(<MobileMenu iconColor="gray.700" />)
    expect(wrapper.find(Drawer).props().isOpen).toBeFalsy()
    wrapper.find(Button).simulate('click')
    expect(wrapper.find(Drawer).props().isOpen).toBeTruthy()
  })

  it('should have icon of correct color', () => {
    const wrapper = shallow(<MobileMenu iconColor="gray.700" />)
    expect(wrapper.find(Icon).props().color).toBe('gray.700')
  })
})
