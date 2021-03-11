import { Heading, Box, Text } from '@chakra-ui/react'
import Progress from 'components/common/Progress'

type Props = {
  score: number
}

const ScoreDisplay = ({ score }: Props) => {
  const getColor = () => {
    if (score < 30) return 'error.500'
    if (score >= 70) return 'success.500'
    return 'warning.500'
  }

  const getText = () => {
    if (score < 30) return 'Unsecured'
    if (score >= 70) return 'Secured'
    return 'Fair'
  }

  return (
    <Box width="100%">
      <Box pb="4px">
        <Text fontWeight="bold" fontSize="md" color={getColor()}>
          {score}
        </Text>
        <Text fontSize="xs" color={getColor()}>
          {getText()}
        </Text>
      </Box>
      <Progress colorScheme={getColor()} value={score} />
    </Box>
  )
}

export default ScoreDisplay
