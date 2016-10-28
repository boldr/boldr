/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { PrimaryHeader, Footer } from '../../components';
import PageTemplate from '../../theme/Boldr/PageTemplate';

export type Props = { children: React$Element<*> };
const Account = (props: Props) => {
  return (
    <div>
      <PageTemplate header={ <PrimaryHeader /> } footer={ <Footer /> }>
        { props.children }
      </PageTemplate>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    routing: state.routing,
    auth: state.auth
  };
}

export default connect(mapStateToProps, null)(Account);
