/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { BaseTemplate } from '../../templates';
import type { ReactElement } from '../../types/react';

type Props = {children: ReactElement, auth: Object}; // eslint-disable-line

const Account = (props: Props) => {
  return (
    <BaseTemplate helmetMeta={ <Helmet title="Account" /> }>
      {props.children}
    </BaseTemplate>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Account);
