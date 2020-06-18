import React, {
  FC,
  ReactElement,
  useState,
  useEffect
} from 'react'
import { SearchInput } from './SearchInput'
import { generateOptionsArray } from './SearchInput.utils'
import mockResponse from 'config/mockApiData.json'

export interface InitialProps {
  focusedPlaceholder?: string
  placeholder?: string
}

interface EmailContact {
  id: number
  first_name: string
  last_name: string
}

const SearchInputDataLayer: FC<InitialProps> = ({
  focusedPlaceholder,
  placeholder
}) => {
  const [optionsArray, setOptionsArray] = useState<ReactElement[]>([]);
  const [selectedEmails, setSelectedEmails] = useState<Array<string>>([]);
  const [currentPlaceholder, setCurrentPlaceholder] = useState<string>(placeholder || '');

  useEffect(() => {
    const userEmailList: EmailContact[] = mockResponse.map(c => ({...c})) // this simulates the process of doing an API request

    const optionsArray = generateOptionsArray(userEmailList)
    setOptionsArray(optionsArray)
  }, mockResponse);

  const handleSelect = (selectedValue: string) => setSelectedEmails([...selectedEmails, selectedValue])
  const handleOnFocus = () => setCurrentPlaceholder(focusedPlaceholder || '')
  const handleOnBlur = () => setCurrentPlaceholder(placeholder || '')

  return (
    <SearchInput
      handleOnBlur={handleOnBlur}
      handleOnFocus={handleOnFocus}
      handleSelect={handleSelect}
      placeholder={currentPlaceholder}
      selectOptions={optionsArray}
    />
  )
}

export default SearchInputDataLayer
