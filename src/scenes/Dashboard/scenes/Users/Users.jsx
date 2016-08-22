/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import UsersList from './components/mol.UsersList';
import { loadSiteUsers, userSelected, updateUser } from './state/siteUsers';
import EditUserForm from './components/atm.EditUserForm';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(loadSiteUsers())
})
class Users extends Component {
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
    this.props.userSelected(userId);
    this.setState({ open: true, userId });
  }
  handleSubmit(values) {
    console.log(values);
    const userData = {
      displayName: values.displayName,
      firstName: values.firstName,
      lastName: values.lastName,
      roleId: values.roleId,
      id: this.state.userId
    };

    this.props.updateUser(userData);
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
         <UsersList toggleUser={ this.toggleUser } users={ this.props.siteUsers.users } />
         <Dialog
           title="Update User"
           actions={ actions }
           modal={ false }
           open={ this.state.open }
           onRequestClose={ this.handleClose }
         >
          <EditUserForm onSubmit={ this.handleSubmit } />
        </Dialog>
       </div>
    );
  }
}

Users.propTypes = {
  siteUsers: PropTypes.object,
  userSelected: PropTypes.func,
  updateUser: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    siteUsers: state.siteUsers,
    selected: state.siteUsers.selected
  };
};

export default connect(mapStateToProps, { userSelected, updateUser })(Users);
