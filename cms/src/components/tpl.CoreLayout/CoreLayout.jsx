import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import TopBar from '../mol.TopBar';

const CoreLayout = (props) => {
  return (
    <div>
      <Helmet
        title="Boldr"
        titleTemplate={ '%s | powered by Boldr' }
      />
      <TopBar />
      { props.children }

    </div>
  );
};

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
