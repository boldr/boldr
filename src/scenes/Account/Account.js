// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { PrimaryHeader } from 'components';

const Account = (props: { children: any }) => {
  return (
      <div>
        <PrimaryHeader />
        { props.children }
      </div>
      );
};

function mapStateToProps(state: Object) {
  return {
    router: state.router,
    boldr: state.boldr,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Account);
