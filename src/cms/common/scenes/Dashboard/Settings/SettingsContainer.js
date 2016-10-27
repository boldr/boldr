import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { fetchSettingsIfNeeded } from 'state/index';
import { getSettings } from 'state/dux/boldr/settings';
import Settings from './Settings';

export type Props = {
  boldr?: Object,
  allSettings: Array<Object>
};

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];
    promises.push(dispatch(fetchSettingsIfNeeded()));
    return Promise.all(promises);
  }
}])
class SettingsContainer extends Component {
  props: Props;
  componentDidMount() {
    this.props.fetchSettingsIfNeeded();
  }
  render() {
    return (
      <Settings { ...this.props } />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    allSettings: getSettings(state)
  };
};

export default connect(mapStateToProps, { fetchSettingsIfNeeded })(SettingsContainer);
