import React, { Component, PropTypes } from 'react';
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
    const { kind, CustomComponent, componentClassName, actionLabel } = this.props;
    const component = !CustomComponent ?
      <div style={ inline } className={ `${componentClassName} ${componentClassName}--${kind}` }>
          <div className={ `${componentClassName}__icon` } />
          <div className={ `${componentClassName}__content` }>
            <span className={ `${componentClassName}__message` }>{ this.props.message }</span>
          </div>
          { actionLabel &&
            <span className={ `${componentClassName}__action` }>
              <button onClick={ this._onActionClick }>{ this.props.actionLabel }</button>
            </span>
          }
          <div className={ `${componentClassName}__close` } />
      </div>
      :
      <CustomComponent { ...this.props } />;

    return component;
  }
}

Notification.defaultProps = {
  kind: 'info'
};

Notification.propTypes = {
  id: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  message: React.PropTypes.string.isRequired,
  kind: React.PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
  componentClassName: React.PropTypes.string,
  onActionClick: React.PropTypes.func,
  actionLabel: React.PropTypes.string,
  CustomComponent: React.PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element
  ])
};

export default Notification;
