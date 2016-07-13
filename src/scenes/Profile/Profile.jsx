import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Row, Container } from 'components/index';
import ProfileMain from './components/pg.ProfileMain';

class Profile extends Component {
  render() {
    return (
    <div>
      <ProfileMain currentUser={ this.props.user.currentUser } />
    </div>
  );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    isLoading: state.user.isLoading,
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps, null)(Profile);
