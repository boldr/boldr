/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { PrimaryHeader } from 'components/index';

export type Props = { children: React$Element<*> };
const Account = (props: Props) => {
  return (
      <div>
        <PrimaryHeader />
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
