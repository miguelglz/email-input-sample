import React, {
  FC,
  ReactElement,
  ChangeEvent
} from 'react';
import { Select } from 'antd';
import Style from './SearchInput.style'

export interface InitialProps { placeholder?: string }

interface SearchInputProps extends InitialProps {
  handleSelect: (selectedValue: any) => void
  selectOptions: Array<ReactElement>
}

const SearchInput: FC<SearchInputProps> = ({ placeholder, selectOptions, handleSelect }) => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    placeholder={placeholder}
    optionLabelProp="label"
    optionFilterProp="search"
    onSelect={handleSelect}
  >
    {selectOptions}
  </Select>
)

export { SearchInput }
