/* @flow */ /* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import UsersList from './components/mol.UsersList';
import { loadSiteUsers } from './state/siteUsersReducer';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(loadSiteUsers())
})
class Users extends Component {
  render() {
    return (
       <div>
         <UsersList users={ this.props.siteUsers.users } />
       </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    siteUsers: state.siteUsers,
    isLoading: state.siteUsers.isLoading
  };
};

export default connect(mapStateToProps)(Users);
