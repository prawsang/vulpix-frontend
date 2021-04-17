import { useState } from 'react'
import Input from 'components/common/Input'
import { InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdSearch } from 'react-icons/md'

const SearchBar = () => {
  const router = useRouter()
  const query = router.query.query as string
  const [searchText, setSearchText] = useState(query || '')

  const onChange = (e) => {
    setSearchText(e.target.value)
  }

  const onSearch = (e) => {
    e.preventDefault()
    router.push(`/browse/search?term=${searchText}`)
  }

  return (
    <form onSubmit={onSearch}>
      <InputGroup my="32px">
        <Input placeholder="Search" onChange={onChange} value={searchText} />
        <InputRightElement>
          <Icon as={MdSearch} boxSize={6} />
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default SearchBar
