import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Snackbar from 'material-ui/Snackbar';
import { clearToastMessage } from 'core/state/boldr';

const snackBarStyle = {
  bottom: '2%'
};

class SnackBar extends Component {
  constructor(props) {
    super(props);

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  /**
   * Clear the snackbar message in the state when we hide the snackbar.
   */
  handleRequestClose() {
    this.props.dispatch(clearToastMessage());
  }

  render() {
    return (
      <Snackbar
        autoHideDuration={ 3000 }
        message={ this.props.boldr.snackBarMessage || 'Placeholder message'}
        onRequestClose={ this.handleRequestClose }
        open={ this.props.boldr.isShowingSnackBar }
        style={ snackBarStyle }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth
  };
}

SnackBar.propTypes = {
  dispatch: PropTypes.func,
  boldr: PropTypes.shape({
    isShowingSnackBar: PropTypes.bool,
    snackBarMessage: PropTypes.string
  })
};

export default connect(mapStateToProps)(SnackBar);
