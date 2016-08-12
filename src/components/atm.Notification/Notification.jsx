import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = styles::classNames;

const inline = {
  zIndex: '99999',
  boxSizing: 'border-box',
  width: '100%',
  padding: '1em',
  backgroundColor: '#323232',
  color: 'rgb(250, 250, 250)',
  lineHeight: '16px',
  boxShadow: '0 2px 5px 0 rgba(0, 0, 0, .26)',
  borderRadius: '2px',
  transition: 'bottom .5s cubic-bezier(.42, 0, .58, 1)',
  left: '10px',
  maxWidth: '320px',
  textRendering: 'optimizeLegibility'
};
class Notification extends Component {
  constructor() {
    super();
    this._id = new Date().getTime();
    this._onActionClick = this._onActionClick.bind(this);
  }

  /*
   * Handle action click event
   * @description Handle click events on the
   */
  _onActionClick(event) {
    event.preventDefault();
    if (this.props.onActionClick) {
      this.props.onActionClick(this.props.id);
    } else {
      return;
    }
  }

  render() {
    const { kind, actionLabel } = this.props;
    return (
        <div style={ inline } className={ cx(`notification notification--${kind}`) }>
          <div className={ cx('notification__icon') } />
          <div className={ cx('notification__content') }>
            <span className={ cx('notification__message') }>{ this.props.message }</span>
          </div>
          { actionLabel &&
            <span className={ cx('notification__action') }>
              <button onClick={ this._onActionClick }>{ this.props.actionLabel }</button>
            </span>
          }
          <div className={ cx('notification__close') } />
      </div>
    );
  }
}

Notification.defaultProps = {
  kind: 'info'
};

Notification.propTypes = {
  id: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  message: React.PropTypes.string.isRequired,
  kind: React.PropTypes.oneOf(['success', 'info', 'error', 'danger']).isRequired,
  onActionClick: React.PropTypes.func,
  actionLabel: React.PropTypes.string
};

export default Notification;
