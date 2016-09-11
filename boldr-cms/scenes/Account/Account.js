import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/org.MainHeader';

const Account = (props) => {
  return (
      <div>
        <Header theme="dark" />
        { props.children }
      </div>
      );
};

Account.propTypes = {
  children: PropTypes.element.isRequired
};

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr,
    auth: state.auth
  };
}

export default connect(mapStateToProps, null)(Account);
