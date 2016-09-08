import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

class Preferences extends Component {

  render() {
    return (
      <div>
        <Helmet
          title="Account Preferences"
          titleTemplate={ '%s | powered by Boldr' }
        />


      </div>
    );
  }
}

Preferences.propTypes = {
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Preferences);
