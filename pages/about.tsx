import { Text, Heading, Box } from '@chakra-ui/react'
import DefaultLayout from 'layouts/default'
import Container from 'components/common/Container'
import CTA from 'components/common/CTA'

const About = () => {
  return (
    <DefaultLayout pageName="About">
      <Container maxWidth="600px">
        <Box pt="64px" pb="64px" textAlign="center" maxWidth="800px" mx="auto">
          <Heading size="md" color="accent.500" textTransform="uppercase" mb="32px">
            About
          </Heading>
          <Box textAlign="left">
            <Heading color="gray.600" size="md" mb="16px" fontWeight="normal">
              <b>VULPIX</b> is an automated personal information leakage detection and testing tool
              for Android applications.
            </Heading>
            <Text as="p" color="gray.600" size="sm" mb="48px">
              You can read more about VULPIX{' '}
              <Text as="a" color="primary.500" textDecor="underline" display="inline">
                <a
                  href="https://ieeexplore.ieee.org/document/9163043"
                  rel="noreferrer"
                  target="_blank"
                >
                  here
                </a>
              </Text>
              .
            </Text>
            <Heading size="md" color="gray.700" mb="24px">
              VULPIX score
            </Heading>
            <Text as="p" color="gray.600" mb="48px">
              VULPIX divides personal information into 4 different types with a total of 32 criteria
              in order to detect the criterion of the leaked personal information and calculate a
              score, called the <b>VULPIX score</b>. VULPIX score was created to accurately evaluate
              how safe your personal information will be while using the app. Leakage in each
              personal information criterion contributes differently to the calculation of the
              VULPIX score.{' '}
              <b>
                The higher an application's VULPIX score, the higher risk that your personal
                information will leak while using the application.
              </b>
            </Text>
            <Heading size="md" color="gray.700" mb="24px">
              VULPIX static and dynamic testing
            </Heading>
            <Text as="p" color="gray.600" mb="16px">
              Static testing is when an application is being tested without actually running the
              application. The application is decompiled and its source code is analyzed to find if
              there is any method in the source code that accesses personal information and of which
              criterion. Static testing can be performed without any Android environment.
            </Text>
            <Text as="p" color="gray.600" mb="48px">
              Dynamic testing is when an application is tested by actually running the application
              on a device. The testing device contains a set of mocked-up personal information of
              all 32 criteria. Then, the device is connected to a computer in order to allow the
              computer to communicate with the device. After the device is connected, a script is
              used to control the device in order to interact with it to install the testing
              application, and then interact with the testing application to see if there is any
              personal information leakage. Leakage is detected by connecting the testing device
              through a proxy server to monitor network traffic during testing, then regular
              expression matching is used on the captured traffic to detect any personal information
              leakage and its criterion.
            </Text>
            <Heading size="md" color="gray.700" mb="24px">
              Difference between VULPIX I and VULPIX II
            </Heading>
            <Text as="p" color="gray.600" mb="16px">
              VULPIX I requires a physical Android device to be attached to a computer to perform
              dynamic testing. It uses a script called Mankey, a script that randomly makes clicks
              on the device screen and fills forms automatically in order to explore an application
              and eventually detect any personal information leakage.
            </Text>
            <Text as="p" color="gray.600">
              VULPIX II allows dynamic tests to be run without the need of an Android physical
              device by running the tests on our servers. Static tests can also be run on our
              servers as well. This means{' '}
              <b>you can request for an application to be tested right on our website</b>. For
              dynamic testing, a genetic algorithm is involved in deciding where to click during
              testing, making interactions in an application more human-like.
            </Text>
          </Box>
        </Box>
      </Container>
      <Container mb="64px">
        <Box maxWidth="800px" marginX="auto">
          <CTA />
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default About
