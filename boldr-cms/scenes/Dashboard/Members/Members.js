/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import Dialog from '../../../components/md/Dialogs';
import { FlatButton, RaisedButton } from '../../../components/md/Buttons';
import MembersList from './components/mol.MembersList';
import { loadSiteMembers, memberSelected, updateMember } from './state/members';
import EditMemberForm from './components/atm.EditMemberForm';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(loadSiteMembers())
})
class Members extends Component {
  static propTypes = {
    members: PropTypes.object,
    memberSelected: PropTypes.func,
    updateMember: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.toggleUser = this.toggleUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { isOpen: false };
  }

  openDialog = () => {
    this.setState({ isOpen: true });
  };

  closeDialog = () => {
    this.setState({ isOpen: false });
  };

  toggleUser(userId) {
    this.props.memberSelected(userId);
    this.setState({ isOpen: true, userId });
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
    const { isOpen } = this.state;
    return (
       <div>
         <MembersList toggleUser={ this.toggleUser } users={ this.props.members.members } />
         <Dialog
           title="Update User"
           isOpen={ isOpen }
           close={ this.closeDialog }
         >
          <EditMemberForm onSubmit={ this.handleSubmit } />
          <FlatButton
            label="Save"
            onClick={ this.handleSubmit }
          />
        </Dialog>
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
