import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

import SnackBar from '../atm.SnackBar';
import TopBar from '../mol.TopBar';

class CoreLayout extends Component {

  render() {
    return (
    <div>
      <Helmet
        title="Boldr"
        titleTemplate={ '%s | powered by Boldr' }
      />
      <TopBar />
      <SnackBar open={ this.props.boldr.isShowingSnackBar } />
      { this.props.children }

    </div>
  );
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node
};
function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(CoreLayout);
