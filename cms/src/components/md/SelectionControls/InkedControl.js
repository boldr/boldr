import React, { PureComponent, PropTypes } from 'react';
import cn from 'classnames';

import injectInk from '../Inks';

class InkedControl extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,

    // Injected from injectInk
    ink: PropTypes.node,
  };

  render() {
    const { children, checked, disabled, type, ink, ...props } = this.props;
    return (
      <div className={cn(`md-${type}`, { 'active': checked, disabled })} {...props}>
        {ink}
        {children}
      </div>
    );
  }
}

export default injectInk(InkedControl);