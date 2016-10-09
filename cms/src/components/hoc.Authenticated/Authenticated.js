import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

export default (ComposedComponent) => {
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  const mapDispatchToProps = { replace };

  @connect(mapStateToProps, mapDispatchToProps)
  class Authenticated extends Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool,
      replace: PropTypes.func
    }
    componentWillMount() {
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth(isAuthenticated) {
      if (!isAuthenticated) {
        this.props.replace('/');
      }
    }

    render() {
      return this.props.isAuthenticated ?
        <ComposedComponent { ...this.props } /> : null;
    }
  }

  return Authenticated;
};
