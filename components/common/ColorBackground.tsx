import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const ColorBackground = ({
  image,
  width = '55%',
  side = 'right',
  top,
}: {
  image: string
  width: string
  side: 'left' | 'right'
  top?: any
}) => {
  return (
    <Box
      position="absolute"
      width={{ base: '120%', lg: width }}
      right={side === 'right' ? 0 : 'initial'}
      top={top || { base: '-10%', lg: '-5%' }}
      left={side === 'left' ? 0 : 'initial'}
      zIndex="-1"
    >
      <Image src={image} alt="" layout="responsive" width={0} height={0} />
    </Box>
  )
}

export default ColorBackground
