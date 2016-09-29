import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { PrimaryHeader } from 'components';

const Account = (props) => {
  return (
      <div>
        <PrimaryHeader />
        { props.children }
      </div>
      );
};

Account.propTypes = {
  children: PropTypes.element.isRequired
};

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr,
    auth: state.auth
  };
}

export default connect(mapStateToProps, null)(Account);
