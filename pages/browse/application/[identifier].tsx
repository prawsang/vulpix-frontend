import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { addViewsToApp, getResult } from 'api/browse'
import Card from 'components/common/Card'
import Container from 'components/common/Container'
import CTA from 'components/common/CTA'
import SearchBar from 'components/common/SearchBar'
import Select from 'components/common/Select'
import DefaultLayout from 'layouts/default'
import { useEffect, useState } from 'react'
import { getColor, getText } from 'utils/score'
import { Result, criterionMap } from 'types/common'
import Progress from 'components/common/Progress'
import Link from 'next/link'
import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa'
import CriterionTable from 'components/results/CriterionTable'

export async function getServerSideProps(context) {
  const identifier = context.params.identifier as string

  const res = await getResult(identifier)
  const results = res.data

  return {
    props: {
      data: results,
    },
  }
}

const leakageCheck = (result) => {
  const l = [] as string[]
  Object.keys(result).forEach((criterion) => {
    if (result[criterion] === true) {
      l.push(criterionMap[criterion])
    }
  })
  return l
}

const ApplicationResult = (props) => {
  const router = useRouter()

  const data = props.data
  const { name, category, results } = data

  const [currentResult, setCurrentResult] = useState<Result | null>()
  const [currentResultIndex, setCurrentResultIndex] = useState(0)
  const [options, setOptions] = useState<any[]>([])
  const [leakage, setLeakage] = useState<string[]>([])

  useEffect(() => {
    if (data) {
      const { results } = data
      const op = [] as any[]
      results.forEach((result, i) => {
        op.push({
          index: i,
          name: `Version ${result.version}, Tested with VULPIX ${result.testingMethod}`,
        })
      })
      if (op.length > 0) {
        setCurrentResult(results[0])
        setCurrentResultIndex(0)
        setOptions(op)
        setLeakage(leakageCheck(results[0]))
      }
    }

    // View the app
    const identifier = router.query.identifier as string
    addViewsToApp(identifier)
  }, [data])

  const onVersionChange = (e) => {
    setCurrentResult(results[e.target.value])
    setCurrentResultIndex(e.target.value)
    setLeakage(leakageCheck(results[e.target.value]))
  }

  return (
    <DefaultLayout pageName={name}>
      <Container mb="64px">
        <Box pt="64px" pb="32px" textAlign="center" maxWidth="800px" mx="auto">
          <Heading size="md" color="accent.500" textTransform="uppercase" mb="32px">
            Browse Test Results
          </Heading>
          <SearchBar />
        </Box>
        <Box>
          <Heading size="lg" color="accent.500" mb="8px">
            {name}
          </Heading>
          <Heading size="md" color="gray.500" mb="16px" fontWeight="normal">
            {category.name}
          </Heading>
          <Box flex="1" pr="8px" pb="32px">
            <Text size="sm" color="gray.600" mb="4px">
              Version and Testing Method
            </Text>
            <Select value={currentResultIndex} onChange={onVersionChange} width="500px">
              {options.map((option) => (
                <option key={`Option ${option.index}`} value={option.index}>
                  {option.name}
                </option>
              ))}
            </Select>
          </Box>
          <Text color="error.500" mb="32px">
            Warning: just because we did not observe a particular data type being accessed during
            our limited testing period does not mean that the app will not access it when being put
            into use.
          </Text>
          {currentResult && (
            <>
              <Flex direction={{ base: 'column', md: 'row' }}>
                <Card mr={{ base: 0, md: '8px' }} flex="45%" padding="32px" mb="16px">
                  <Flex mb="16px">
                    <Heading color={getColor(currentResult!.vulpixScore)} size="2xl">
                      {currentResult!.vulpixScore}
                    </Heading>
                    <Box pl="16px">
                      <Heading color="gray.700" size="md">
                        VULPIX Score
                      </Heading>
                      <Text color={getColor(currentResult!.vulpixScore)} size="sm">
                        {getText(currentResult!.vulpixScore)}
                      </Text>
                    </Box>
                  </Flex>
                  <Progress
                    colorScheme={getColor(currentResult!.vulpixScore)}
                    value={currentResult!.vulpixScore}
                  />
                  <Text color="gray.500" size="sm" mt="24px" mb="16px">
                    VULPIX Score indicates the level of the application’s safety. It is acquired by
                    static testing.
                  </Text>
                  <Link href="/about">
                    <Text size="sm" color="primary.500" cursor="pointer" textDecor="underline">
                      Learn more about testing methods
                    </Text>
                  </Link>
                </Card>
                <Card ml={{ base: 0, md: '8px' }} flex="55%" padding="32px" mb="16px">
                  <Heading textAlign="center" size="md" color="gray.700" pb="32px">
                    Summary
                  </Heading>
                  <Flex alignItems="center" mb="16px">
                    <Box>
                      {leakage.length > 0 ? (
                        <Icon as={FaExclamationCircle} boxSize={16} color="error.500" />
                      ) : (
                        <Icon as={FaCheckCircle} boxSize={16} color="success.500" />
                      )}
                    </Box>
                    <Heading
                      color={leakage.length > 0 ? 'error.500' : 'success.500'}
                      size="md"
                      pl="16px"
                      mb="16px"
                    >
                      {leakage.length > 0 ? 'Leakage Detected' : 'Leakage Not Detected'}
                    </Heading>
                  </Flex>
                  <Box>
                    {leakage.length > 0 && (
                      <>
                        <Heading color="gray.700" mb="12px" size="sm">
                          Leakage found for:
                        </Heading>
                        <Box pl="16px">
                          <ul color="gray.600">
                            {leakage.map((e, i) => (
                              <li key={`leakage-${i}`}>{e}</li>
                            ))}
                          </ul>
                        </Box>
                      </>
                    )}
                  </Box>
                </Card>
              </Flex>
              <Heading
                size="md"
                color="accent.500"
                mt="64px"
                mb="48px"
                textAlign="center"
                textTransform="uppercase"
              >
                Details
              </Heading>
              <CriterionTable
                results={{
                  advertiserId: currentResult!.advertiserId,
                  androidId: currentResult!.androidId,
                  deviceSerialNumber: currentResult!.deviceSerialNumber,
                  googleServicesId: currentResult!.googleServicesId,
                  imei: currentResult!.imei,
                }}
                name="Device Information"
                mb="32px"
              />
              <CriterionTable
                results={{
                  macAddress: currentResult!.macAddress,
                  cellId: currentResult!.cellId,
                  simSerialNumber: currentResult!.simSerialNumber,
                  imsi: currentResult!.imsi,
                  localAreaCode: currentResult!.localAreaCode,
                  phoneNumber: currentResult!.phoneNumber,
                }}
                name="SIM Card Information"
                mb="32px"
              />
              <CriterionTable
                results={{
                  age: currentResult!.age,
                  calendar: currentResult!.calendar,
                  contactBook: currentResult!.contactBook,
                  ccv: currentResult!.ccv,
                  dob: currentResult!.dob,
                  email: currentResult!.email,
                  name: currentResult!.name,
                  gender: currentResult!.gender,
                  password: currentResult!.password,
                  ssn: currentResult!.ssn,
                  username: currentResult!.username,
                }}
                name="User Information"
                mb="32px"
              />
              <CriterionTable
                results={{
                  audioRecording: currentResult!.audioRecording,
                  photo: currentResult!.photo,
                  sms: currentResult!.sms,
                  webBrowsingLog: currentResult!.webBrowsingLog,
                }}
                name="Media and Device Usage"
                mb="32px"
              />
              <CriterionTable
                results={{
                  country: currentResult!.country,
                  physicalAddress: currentResult!.physicalAddress,
                  timezone: currentResult!.timezone,
                  gps: currentResult!.gps,
                }}
                name="Location"
                mb="32px"
              />
              <Box paddingBottom="32px" />
            </>
          )}
        </Box>
        <Box maxWidth="800px" marginX="auto">
          <CTA />
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default ApplicationResult
