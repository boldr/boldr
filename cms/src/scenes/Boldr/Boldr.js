import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import { Notifications } from 'components';
import { fetchSettingsIfNeeded } from 'state/dux/boldr';
import { loadPrimary } from 'state/dux/navigation';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchSettingsIfNeeded())
})
class Boldr extends Component {
  static propTypes = {
    children: PropTypes.node,
    fetchSettingsIfNeeded: PropTypes.func
  };
  componentDidMount() {
    this.props.fetchSettingsIfNeeded();
  }
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
    auth: state.auth,
    notifications: state.notifications,
    navigation: state.navigation
  };
}

export default connect(mapStateToProps, { fetchSettingsIfNeeded })(Boldr);
