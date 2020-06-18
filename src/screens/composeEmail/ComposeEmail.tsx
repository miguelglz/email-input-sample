import React, { SFC } from 'react';
import { Modal } from 'antd';
import Style from './ComposeEmail.style'
import SearchInput from './searchInput'

const ComposeEmail: SFC = () => (
  <Modal
    cancelButtonProps={{ style: Style.cancelButton }}
    closable={false}
    okButtonProps={{ style: Style.sendButton }}
    okText='Send'
    visible
  >
    <SearchInput focusedPlaceholder='To' placeholder='Recipients' />
  </Modal>
);

export default ComposeEmail;
