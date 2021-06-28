import { Box } from '@chakra-ui/react'
// import Image from 'next/image'

const ColorBackground = ({
  image,
  width = '55%',
  side = 'right',
  top,
  left,
  right,
  mdWidth = '120%',
}: {
  image: string
  width?: string
  side?: 'left' | 'right'
  top?: string
  left?: string
  right?: string
  mdWidth?: string
}) => {
  return (
    <Box
      position="absolute"
      width={{ base: '120%', md: mdWidth, lg: width }}
      right={side === 'right' ? right || 0 : 'initial'}
      top="0"
      transform={top ? `translateY(${top})` : 'translateY(-15%)'}
      left={side === 'left' ? left || 0 : 'initial'}
      zIndex="-1"
    >
      <img src={image} alt="" style={{ maxHeight: '100%', width: '100%' }} />
    </Box>
  )
}

export default ColorBackground
