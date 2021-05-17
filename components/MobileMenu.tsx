import React from 'react'
import { MdMenu } from 'react-icons/md'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Icon,
  Box,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'components/common/Link'

const MenuItem = styled(Box)`
  margin: 16px 0;
`

const MobileMenu = ({ iconColor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>

  return (
    <Box>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bg="transparent !important"
        display={{ base: 'block', md: 'none' }}
      >
        <Icon as={MdMenu} boxSize={8} color={iconColor} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton boxSize={8} />
            <DrawerBody pt="64px">
              <MenuItem>
                <Link href="/" color="gray.600">
                  Browse
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/" color="gray.600">
                  Request Testing
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/" color="gray.600">
                  Statistics
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/" color="gray.600">
                  About
                </Link>
              </MenuItem>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export default MobileMenu
