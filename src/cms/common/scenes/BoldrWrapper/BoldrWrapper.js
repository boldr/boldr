/* @flow */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import type { ReactElement } from '../../types/react';
import { Notifications } from '../../components/index';
import { fetchPagesIfNeeded, isLoaded as isPagesLoaded } from '../../state/dux/pages';
import { getNavs, getByLabel } from '../../state/dux/boldr/nav';
import { isLoaded as isSettingsLoaded, getSettings } from '../../state/dux/boldr/settings';
import { fetchSettingsIfNeeded } from '../../state/dux/boldr/actions';
import meta from '../../core/config/base';
import '../../styles/main.scss';

export type Props = {
  children: ReactElement,
  fetchSettingsIfNeeded: Function,
  fetchPagesIfNeeded: Function,
  settings: Object
};

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];
    if (!isSettingsLoaded(getState())) {
      promises.push(dispatch(fetchSettingsIfNeeded()));
    }
    if (!isPagesLoaded(getState())) {
      promises.push(dispatch(fetchPagesIfNeeded()));
    }
    return Promise.all(promises);
  }
}])
class BoldrWrapper extends Component {
  componentDidMount() {
    this.props.fetchSettingsIfNeeded();
    this.props.fetchPagesIfNeeded();
  }
  props: Props;
  render() {
    return (
    <div>
      <Helmet { ...meta.boldr } script={ [] } />

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
    notifications: state.notifications
  };
}

export default connect(mapStateToProps, { fetchSettingsIfNeeded, fetchPagesIfNeeded })(BoldrWrapper);
