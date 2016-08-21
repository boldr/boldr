import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

import { fetchSettingsIfNeeded, saveBoldrSetup, updateBoldrSettings } from '../../../Boldr/state/boldr';
import GeneralTab from './components/mol.GeneralTab';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchSettingsIfNeeded())
})
class Settings extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    if (!this.props.boldr.siteName) {
      this.props.saveBoldrSetup(values);
    } else {
      const id = this.props.boldr.id;
      this.props.updateBoldrSettings(values, id);
    }
  }
  render() {
    if (this.props.boldr.isLoading) {
      return <div><h1>Settings</h1><h3>Loading...</h3></div>
    }
    return (
      <div>
      <Paper>
        <Tabs>
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

Settings.propTypes = {
  boldr: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    boldr: state.boldr,
    isLoading: state.boldr.isLoading
  };
};
export default connect(mapStateToProps, { saveBoldrSetup, updateBoldrSettings })(Settings);
