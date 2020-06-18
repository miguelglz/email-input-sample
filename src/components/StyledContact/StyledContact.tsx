import React, { SFC } from 'react';
import Style from './StyledContact.style'

interface StyledContactProps {
  first_name: string
  last_name: string
  email: string
  profile_picture: string
}

const StyledContact: SFC<StyledContactProps> = ({ first_name, last_name, email, profile_picture }) => (
  <div style={Style.container}>
    <img style={Style.picture} src={profile_picture} />
    <div style={Style.rightContainer}>
      <div style={Style.contactName}>{`${first_name} ${last_name}`}</div>
      <div style={Style.email}>{email}</div>
    </div>
  </div>
)

export default StyledContact
