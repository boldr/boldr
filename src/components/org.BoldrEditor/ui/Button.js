/* @flow */

import React, { Component } from 'react';
import cx from 'classnames';
import { FlatButton } from '../../md/Buttons';
// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './Button.css';

type EventHandler = (event: Event) => any;

// TODO: Use a more specific type here.
type ReactNode = any;

type Props = {
  children?: ReactNode;
  className?: string;
  focusOnClick?: boolean;
  formSubmit?: boolean;
  isDisabled?: boolean;
  onMouseDown?: EventHandler;
};
const inStyle = {
  width: '30px',
  minWidth: '30px',
  maxWidth: '40px',
  padding: '8px 4px'
};
export default class Button extends Component {
  constructor() {
    super(...arguments); // eslint-disable-line
    this._onMouseDownPreventDefault = this._onMouseDownPreventDefault.bind(this);
  }
  _onMouseDownPreventDefault(event: Event) {
    event.preventDefault();
    const { onMouseDown } = this.props;
    if (onMouseDown != null) { // eslint-disable-line
      onMouseDown(event);
    }
  }

  props: Props;
  render(): React.Element {
    const { props } = this;
    let { className, isDisabled, focusOnClick, formSubmit, ...otherProps } = props; // eslint-disable-line
    className = cx(className, styles.root);
    let onMouseDown = (focusOnClick === false) ? this._onMouseDownPreventDefault : props.onMouseDown;
    let type = formSubmit ? 'submit' : 'button';
    return (
      <FlatButton type={ type } { ...otherProps } style={ inStyle }
        onMouseDown={ onMouseDown } className={ className } disabled={ isDisabled }
      >
        {props.children}
      </FlatButton>
    );
  }
}
