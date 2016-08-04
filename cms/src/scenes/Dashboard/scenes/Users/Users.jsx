/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import UsersList from './components/mol.UsersList';
import { loadSiteUsers } from './state/siteUsers';

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

Users.propTypes = {
  siteUsers: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    siteUsers: state.siteUsers
  };
};

export default connect(mapStateToProps)(Users);
