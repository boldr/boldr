/* @flow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header } from 'components/index';

export type Props = {children?: React.Element};
const Account = (props) => {
  return (
      <div>
        <Header theme="dark" />
        { props.children }
      </div>
      );
};

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr,
    auth: state.auth
  };
}

export default connect(mapStateToProps, null)(Account);
