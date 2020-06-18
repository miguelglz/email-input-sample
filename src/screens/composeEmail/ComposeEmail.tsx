import React, { SFC } from 'react';
import { Modal } from 'antd';
import Style from './ComposeEmail.style'
import SearchInput from './searchInput'

const ComposeEmail: SFC = () => (
  <Modal
    visible
    closable={false}
    cancelButtonProps={{ style: Style.cancelButton }}
    okButtonProps={{ style: Style.sendButton }}
    okText='Send'
  >
    <SearchInput placeholder='Recipients' focusedPlaceholder='To' />
  </Modal>
);

export default ComposeEmail;
