import { Box, Text } from '@chakra-ui/react'
import Progress from 'components/common/Progress'
import { getColor, getText } from 'utils/score'

type Props = {
  score: number
}

const ScoreDisplay = ({ score }: Props) => {
  return (
    <Box width="100%">
      <Box pb="4px">
        <Text fontWeight="bold" fontSize="md" color={getColor(score)}>
          {score}
        </Text>
        <Text fontSize="xs" color={getColor(score)}>
          {getText(score)}
        </Text>
      </Box>
      <Progress minWidth="120px" colorScheme={getColor(score)} value={score} />
    </Box>
  )
}

export default ScoreDisplay
