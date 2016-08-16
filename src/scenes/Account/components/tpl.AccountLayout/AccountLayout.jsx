import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../../../../components/org.MainHeader';

const AccountLayout = (props) => {
  return (
      <div>
        <Header theme="dark" />
        { props.children }
      </div>
      );
};

AccountLayout.propTypes = {
  children: PropTypes.element.isRequired
};

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr,
    account: state.account
  };
}

export default connect(mapStateToProps, null)(AccountLayout);
