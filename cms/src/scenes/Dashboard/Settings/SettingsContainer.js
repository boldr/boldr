import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { fetchSettingsIfNeeded, getSettings } from 'state/dux/setting';
import Settings from './Settings';

export type Props = {
  boldr?: Object,
  allSettings: Array<Object>
};
const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings,
    allSettings: getSettings(state),
    isLoading: state.boldr.isLoading
  };
};

@connect(mapStateToProps)
@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchSettingsIfNeeded())
})
class SettingsContainer extends Component {
  props: Props;

  render() {
    return (
      <Settings { ...this.props } />
    );
  }
}

export default SettingsContainer;
