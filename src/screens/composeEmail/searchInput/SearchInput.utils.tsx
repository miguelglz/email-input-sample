import React, { ReactElement } from 'react'
import { Select } from 'antd'
import StyledContact from 'components/StyledContact'

/**
 * Generates an array of options to be used in an Ant Design Select component.
 *
 * @param {Array} rawObjects - A list of the user's contacts.
 *
 * @returns {Array} An Array of <Option /> elements.
 */

function generateOptionsArray (rawObjects: Array<any>): ReactElement[] {
  const { Option } = Select

  return rawObjects.map(contactData => {
    return (
      <Option
        key={contactData.id}
        value={`${contactData.email}`}
        label={`${contactData.first_name} ${contactData.last_name} <${contactData.email}>`}
        search={`${contactData.first_name} ${contactData.last_name} ${contactData.email}`}
      >
        <StyledContact {...contactData} />
      </Option>
    )
  })
}

export { generateOptionsArray }