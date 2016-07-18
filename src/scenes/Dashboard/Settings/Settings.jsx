import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import { loadBoldrSettings, saveBoldrSetup } from 'state/modules/boldr';
import GeneralTab from '../components/atm.GeneralTab';

const iconButtonElement = (
  <IconButton
    touch
    tooltip="more"
  >
    <MoreVertIcon />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={ iconButtonElement }>
    <MenuItem>View</MenuItem>
    <MenuItem>Modify</MenuItem>
  </IconMenu>
);

@provideHooks({
  fetch: ({ dispatch }) => dispatch(loadBoldrSettings())
})
class Settings extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <div>
      <Paper>
        <Tabs>
            <Tab label="General">
              <div>
              <GeneralTab settings={ this.props.boldr } />

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
export default connect(mapStateToProps)(Settings);
