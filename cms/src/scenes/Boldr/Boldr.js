/* @flow */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import { Notifications } from 'components/index';
import { fetchSettingsIfNeeded, getSettings } from 'state/dux/setting';
import { fetchPagesIfNeeded } from 'state/dux/page';

export type Props = {
  children: ReactElement,
  fetchSettingsIfNeeded: Function,
  settings: Object
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
    settings: getSettings(state),
    auth: state.auth,
    notifications: state.notifications,
    navigation: state.navigation
  };
}

export default connect(mapStateToProps, { fetchSettingsIfNeeded, fetchPagesIfNeeded })(Boldr);
