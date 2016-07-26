import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const AccountLayout = (props) => {

    return (
      <div>
        { props.children }
      </div>
      );
}

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr,
    account: state.account
  };
}

export default connect(mapStateToProps, null)(AccountLayout);
