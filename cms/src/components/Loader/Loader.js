import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import CircularProgress from './CircularProgress';

export default class Loader extends Component {

  static defaultProps = {
    loading: false
  }

  render() {
    const { style, loading, ...props } = this.props;

    let loadingDiv;
    let loadingStyle = {};
    if (loading) {
      loadingDiv = (
        <div style={ {
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center'
        } }>
        <CSSTransitionGroup
          component="div"
          className="text-container"
          transitionName="opacity"
          transitionEnterTimeout={ 150 }
          transitionLeaveTimeout={ 150 }
        >
          <CircularProgress key="progress" style={ { margin: '0 auto' } } />
          </CSSTransitionGroup>
        </div>
      );
      loadingStyle.opacity = 0.2;
    }

    return (
      <div style={ Object.assign({ position: 'relative', width: '100%' }, style) } { ...props }>
        {loadingDiv}
        <div style={ loadingStyle }>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object
};
