import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import TopBar from '../mol.TopBar';
import Notifications from '../atm.Notification';

const CoreLayout = (props) => {
  return (
    <div>
      <Helmet
        title="Boldr"
        titleTemplate={ '%s | powered by Boldr' }
      />
      <TopBar />
      { props.children }
      <Notifications />
    </div>
  );
};

CoreLayout.propTypes = {
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth,
    notifications: state.notifications
  };
}

export default connect(mapStateToProps)(CoreLayout);