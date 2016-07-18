import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import { loadBoldrSettings, saveBoldrSetup } from 'state/modules/boldr';
import SetupForm from '../atm.SetupForm';
import styles from './Setup.css'

const cx = styles::classNames;

class Setup extends Component {
  handleSubmit(values) {
    this.props.dispatch(saveBoldrSetup(values));
  }
  render() {
    return (
      <div>
        <Toolbar style={ { backgroundColor: 'rgb(64, 64, 78)', marginBottom: '1em' } }>
          <ToolbarGroup>
            <ToolbarTitle text="Setup" style={ { color: 'rgba(237, 237, 237, 1)' } } />
          </ToolbarGroup>
        </Toolbar>
        <section className={ cx('root') }>
          <Paper style={ { padding: '1em' } }>
          <SetupForm onSubmit={ ::this.handleSubmit } />
          </Paper>
        </section>
      </div>
    );
  }
}

Setup.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    boldr: state.boldr,
    isLoading: state.boldr.isLoading
  };
};
export default connect(mapStateToProps)(Setup);
