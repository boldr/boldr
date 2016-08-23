/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
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
  }
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  toggleUser(userId) {
    this.props.memberSelected(userId);
    this.setState({ open: true, userId });
  }
  handleSubmit(values) {
    const userData = {
      displayName: values.displayName,
      firstName: values.firstName,
      lastName: values.lastName,
      roleId: values.roleId,
      id: this.state.userId
    };

    this.props.updateMember(userData);
  }
  render() {
    const actions = [
      <FlatButton
        key={ 1 }
        label="Cancel"
        primary
        onTouchTap={ this.handleClose }
      />,
      <FlatButton
        key={ 2 }
        label="Save"
        primary
        keyboardFocused
        onTouchTap={ this.handleSubmit }
      />
    ];
    return (
       <div>
         <MembersList toggleUser={ this.toggleUser } users={ this.props.members.members } />
         <Dialog
           title="Update User"
           actions={ actions }
           modal={ false }
           open={ this.state.open }
           onRequestClose={ this.handleClose }
         >
          <EditMemberForm onSubmit={ this.handleSubmit } />
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
