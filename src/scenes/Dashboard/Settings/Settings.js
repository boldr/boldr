import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import Paper from '../../../components/md/Papers';
import { Tabs, Tab } from '../../../components/md/Tabs';

import { Loader } from '../../../components';
import { fetchSettingsIfNeeded, updateBoldrSettings } from '../../Boldr/state/boldr';
import GeneralTab from './components/mol.GeneralTab';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchSettingsIfNeeded())
})
class Settings extends Component {
  static propTypes = {
    boldr: PropTypes.object.isRequired,
    updateBoldrSettings: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const id = this.props.boldr.id;
    this.props.updateBoldrSettings(values, id);
  }
  render() {
    if (this.props.boldr.isLoading) {
      return <Loader />;
    }
    return (
      <div>
      <Paper>
        <Tabs primary scrollable>
            <Tab label="General">
              <div>
              <GeneralTab onSubmit={ this.handleSubmit } settings={ this.props.boldr } />

              </div>
            </Tab>
            <Tab label="Soon">
              <div>
                <p>
                  This is empty
                </p>
              </div>
            </Tab>
            <Tab label="Soon">
              <div>
                <p>
                  This is empty
                </p>
              </div>
            </Tab>
          </Tabs>
          </Paper>
      </div>
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
