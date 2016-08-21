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
  constructor(props) {
    super(props);
    this.handleSelectedRow = this.handleSelectedRow.bind(this);
  }
  handleSelectedRow(user) {
    console.log('selected', user);
  }
  render() {
    return (
       <div>
         <UsersList handleSelectedRow={ this.handleSelectedRow } users={ this.props.siteUsers.users } />
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
