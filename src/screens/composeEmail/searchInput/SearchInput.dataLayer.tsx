import React, {
  FC,
  ReactElement,
  useState,
  useEffect
} from 'react'
import { SearchInput, InitialProps } from './SearchInput'
import { generateOptionsArray } from './SearchInput.utils'
import mockResponse from 'config/mockApiData.json'

interface EmailContact {
  id: number
  first_name: string
  last_name: string
}

const SearchInputDataLayer: FC<InitialProps> = props => {
  const [optionsArray, setOptionsArray] = useState<ReactElement[]>([]);
  const [selectedEmails, setSelectedEmails] = useState<Array<string>>([]);

  useEffect(() => {
    const userEmailList: EmailContact[] = mockResponse.map(c => ({...c})) // this simulates the process of doing an API request

    const optionsArray = generateOptionsArray(userEmailList)
    setOptionsArray(optionsArray)
  }, mockResponse);

  const handleSelect = (selectedValue: string) => setSelectedEmails([...selectedEmails, selectedValue])

  return <SearchInput {...props} selectOptions={optionsArray} handleSelect={handleSelect} />
}

export default SearchInputDataLayer
