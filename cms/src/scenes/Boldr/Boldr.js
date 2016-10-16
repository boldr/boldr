/* @flow */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import { Notifications } from 'components/index';
import { fetchSettingsIfNeeded } from 'state/dux/boldr';
import { fetchPagesIfNeeded } from 'state/dux/page';

export type Props = {
  children: React$Element<*>,
  fetchSettingsIfNeeded: Function
};

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchSettingsIfNeeded()),
  defer: ({ dispatch }) => dispatch(fetchPagesIfNeeded())
})
class Boldr extends Component {
  componentDidMount() {
    this.props.fetchSettingsIfNeeded();
  }
  props: Props;
  render() {
    return (
      <div>
      {/* TODO: switch title="boldr" to this.props.setting.title */}
        <Helmet
          title="Boldr"
          titleTemplate={ '%s | powered by Boldr' }
        />
        { this.props.children }
        <Notifications />
    </div>
  );
  }
}

function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth,
    notifications: state.notifications,
    navigation: state.navigation
  };
}

export default connect(mapStateToProps, { fetchSettingsIfNeeded, fetchPagesIfNeeded })(Boldr);
