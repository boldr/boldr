import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { fetchSettingsIfNeeded, updateBoldrSettings, getSettings } from 'state/dux/setting';
import Settings from './Settings';

export type Props = {
  boldr?: Object,
  allSettings: Array<Object>,
  updateBoldrSettings?: Function,
};
const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings,
    allSettings: getSettings(state),
    isLoading: state.boldr.isLoading
  };
};

@connect(mapStateToProps, { updateBoldrSettings })
@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchSettingsIfNeeded())
})
class SettingsContainer extends Component {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  props: Props;

  handleSubmit(values, id) {
    this.props.updateBoldrSettings(values, id);
  }
  render() {
    return (
      <Settings { ...this.props } handleSubmit={ this.handleSubmit } />
    );
  }
}

export default SettingsContainer;
