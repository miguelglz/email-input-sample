import React, {
  FC,
  ReactElement,
  ChangeEvent
} from 'react';
import { Select } from 'antd';
import Style from './SearchInput.style'

interface SearchInputProps {
  handleOnBlur?: () => void
  handleOnFocus?: () => void
  handleSelect: (selectedValue: any) => void
  placeholder?: string
  selectOptions: Array<ReactElement>
}

const SearchInput: FC<SearchInputProps> = ({
  handleOnBlur,
  handleOnFocus,
  handleSelect,
  placeholder,
  selectOptions
}) => (
  <Select
    bordered={false}
    mode="tags"
    onFocus={handleOnFocus}
    onSelect={handleSelect}
    optionFilterProp="search"
    optionLabelProp="label"
    onBlur={handleOnBlur}
    placeholder={placeholder}
    style={Style.selectContainer}
  >
    {selectOptions}
  </Select>
)

export { SearchInput }
