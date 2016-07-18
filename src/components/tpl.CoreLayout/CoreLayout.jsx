import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Helmet from 'react-helmet';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

import Message from 'components/atm.Message';
import TopBar from 'components/mol.TopBar';
import '../../styles/main.scss';

class CoreLayout extends Component {

  render() {
    return (
    <div>
      <Helmet
        title="Boldr"
        titleTemplate={ '%s | powered by Boldr' }
      />
      <TopBar />
      { this.props.children }
    </div>
  );
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node
};

export default CoreLayout;
