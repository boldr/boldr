/* @flow */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Helmet from 'react-helmet';
import { Modal } from 'boldr-ui';
import { showModal, hideModal } from '../../../state/modules/boldr/ui/actions';
import { MembersList, EditMemberForm } from './components';

type Props = {
  visible: boolean,
  close: Function,
  initialValues: Object,
  users: Array<Object>,
  toggleUser: Function,
  handleSubmit: Function,
};

const Members = (props: Props) => {
  return (
    <div>
      <Helmet title="Admin: Members" />
      <MembersList toggleUser={ props.toggleUser } users={ props.users } />
      <Modal visible={ props.visible } title="Edit User" onClose={ props.close }>
        <EditMemberForm onSubmit={ props.handleSubmit } initialValues={ props.initialValues } />
      </Modal>
    </div>
  );
};

export default Members;
