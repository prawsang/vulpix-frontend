import { Box, Flex, Heading } from '@chakra-ui/react'
import DefaultLayout from 'layouts/default'
import Container from 'components/common/Container'
import CategorySelect from 'components/browse/CategorySelect'
import CTA from 'components/common/CTA'
import SearchBar from 'components/common/SearchBar'
import ColorBackground from 'components/common/ColorBackground'
import Image from 'next/image'

const Browse = () => {
  return (
    <DefaultLayout pageName="Browse" logoColor="gray.700">
      <Container mb="64px" position="relative">
        <ColorBackground
          image="/images/browse-bg.svg"
          side="left"
          mdWidth="60%"
          top="-60px"
          width="60%"
        />
        <Flex
          pt="64px"
          flexDirection={{
            md: 'row',
            base: 'column',
          }}
        >
          <Box
            flex="50%"
            marginLeft="auto"
            marginRight="auto"
            width={{ md: '100%', base: '60%' }}
            pr={{ md: 8, base: 0 }}
          >
            <Image
              src="/images/browse-img.svg"
              alt=""
              layout="responsive"
              width={1000}
              height={1000}
            />
          </Box>
          <Box flex="50%" pl={{ md: 8, base: 0 }}>
            <Box pt="64px" textAlign={{ base: 'center', md: 'right' }} maxWidth="800px" mx="auto">
              <Heading size="lg" color="accent.500" textTransform="uppercase" mb="16px">
                Browse Test Results
              </Heading>
              <Heading
                size="md"
                color={{ base: 'gray.400', md: 'gray.600', lg: 'gray.400' }}
                fontWeight="normal"
                mb="64px"
              >
                Search for your applications here
              </Heading>
              <SearchBar width="100%" />
            </Box>
          </Box>
        </Flex>
      </Container>
      <Container maxWidth="800px" mb="64px">
        <CategorySelect mt="64px" pb="64px" />
        <CTA />
      </Container>
    </DefaultLayout>
  )
}

export default Browse
