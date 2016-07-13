import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { loadBoldrSettings, saveBoldrSetup } from 'state/modules/boldr';
@provideHooks({
  fetch: ({ dispatch }) => dispatch(loadBoldrSettings())
})
class Settings extends Component {

  render() {
    return (
      <div>
        { this.props.boldr.siteName }
        { this.props.boldr.logo }
        { this.props.boldr.favicon }
        { this.props.boldr.description }
        { this.props.boldr.siteUrl }
        { this.props.boldr.allowRegistration }
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
