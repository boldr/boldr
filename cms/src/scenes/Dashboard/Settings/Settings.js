import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import Paper from 'components/md/Papers';

import { Loader } from 'components/index';
import { fetchSettingsIfNeeded, updateBoldrSettings } from 'state/dux/boldr';
import GeneralTab from 'components/GeneralTab';

export type Props = {
  boldr?: Object,
  updateBoldrSettings?: Function,
};

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchSettingsIfNeeded())
})
class Settings extends Component {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  props: Props;

  handleSubmit(values) {
    const id = this.props.boldr.id;
    this.props.updateBoldrSettings(values, id);
  }
  render() {
    if (this.props.boldr.isLoading) {
      return <Loader />;
    }
    return (

      <Paper>
      <GeneralTab onSubmit={ this.handleSubmit } settings={ this.props.boldr } initialValues={ this.props.boldr } />

          </Paper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    boldr: state.boldr,
    isLoading: state.boldr.isLoading
  };
};
export default connect(mapStateToProps, { updateBoldrSettings })(Settings);
