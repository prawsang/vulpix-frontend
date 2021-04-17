import { HStack } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Button from './Button'
import Link from './Link'

interface Props {
  currentPage: number
  totalPages: number
}

const genPageNumbers = (currentPage: number, totalPages: number) => {
  const pages = [currentPage] as number[]
  let toNext = currentPage + 1
  let toPrev = currentPage - 1
  while (pages.length < 5) {
    if (toNext <= totalPages) {
      pages.push(toNext)
      toNext++
    }
    if (toPrev >= 1) {
      pages.push(toPrev)
      toPrev--
    }
  }
  pages.sort((a, b) => a - b)
  return pages
}

const Pagination = (props: Props) => {
  const router = useRouter()
  const { query, pathname } = router

  const { currentPage, totalPages } = props

  const pages = genPageNumbers(currentPage, totalPages)

  return (
    <HStack alignItems="center" spacing="16px">
      {currentPage !== 1 && (
        <Link
          href={{
            pathname,
            query: {
              ...query,
              page: currentPage - 1,
            },
          }}
        >
          <Button minWidth="auto" paddingLeft="8px" paddingRight="8px">
            <MdKeyboardArrowLeft color="white" size="24px" />
          </Button>
        </Link>
      )}
      {pages.map((e) => (
        <Link
          href={{
            pathname,
            query: {
              ...query,
              page: e,
            },
          }}
          color={e === currentPage ? 'primary.500' : 'gray.700'}
          key={`page${e}`}
        >
          {e}
        </Link>
      ))}
      {currentPage !== totalPages && (
        <Link
          href={{
            pathname,
            query: {
              ...query,
              page: currentPage + 1,
            },
          }}
        >
          <Button minWidth="auto" paddingLeft="8px" paddingRight="8px">
            <MdKeyboardArrowRight color="white" size="24px" />
          </Button>
        </Link>
      )}
    </HStack>
  )
}

export default Pagination
