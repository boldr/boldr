/* @flow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Modal } from 'semantic-ui-react';
import MembersList from './components/MembersList';
import EditMemberForm from './components/EditMemberForm';
import { loadSiteMembers, memberSelected, updateMember } from './actions';

export type Props = {
  members: Object,
  memberSelected: Function,
  updateMember: Function,
};

@provideHooks({
  fetch: ({ dispatch }) => dispatch(loadSiteMembers())
})
class Members extends Component {
  constructor(props: Props) {
    super(props);
    (this: any).toggleUser = this.toggleUser.bind(this);
    (this: any).handleSubmit = this.handleSubmit.bind(this);
  }
  state: Object = { open: false };
  props: Props;

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  toggleUser(userId) {
    this.props.memberSelected(userId);
    this.setState({ open: true, userId });
  }
  handleSubmit(values) {
    const userData = {
      display_name: values.display_name,
      first_name: values.first_name,
      last_name: values.last_name,
      roleId: values.roleId,
      id: this.state.userId
    };

    this.props.updateMember(userData);
  }
  render() {
    const { open } = this.state;
    return (
       <div>
         <MembersList toggleUser={ this.toggleUser } users={ this.props.members.members } />
         <Modal
           open={ open }
           onOpen={ this.open }
           onClose={ this.close }
         >
            <Modal.Header>Edit User</Modal.Header>
            <Modal.Content>
            <EditMemberForm onSubmit={ this.handleSubmit } />
            </Modal.Content>
          </Modal>
       </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    members: state.members,
    selected: state.members.selected
  };
};

export default connect(mapStateToProps, { memberSelected, updateMember })(Members);
