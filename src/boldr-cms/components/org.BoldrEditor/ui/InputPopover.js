/* @flow */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import autobind from 'class-autobind';

import IconButton from './IconButton';
import ButtonGroup from './ButtonGroup';

// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './InputPopover.css';

type Props = {
  className?: string;
  onCancel: () => any;
  onSubmit: (value: string) => any;
};

export default class InputPopover extends Component {
  constructor() {
    super(...arguments);
    autobind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this._onDocumentClick);
    document.addEventListener('keydown', this._onDocumentKeydown);
    if (this._inputRef) {
      this._inputRef.focus();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._onDocumentClick);
    document.removeEventListener('keydown', this._onDocumentKeydown);
  }
  _inputRef: ?Object;

  _setInputRef(inputElement: Object) {
    this._inputRef = inputElement;
  }

  _onInputKeyPress(event: Object) {
    if (event.which === 13) {
        // Avoid submitting a <form> somewhere up the element tree.
      event.preventDefault();
      this._onSubmit();
    }
  }

  _onSubmit() {
    const value = this._inputRef ? this._inputRef.value : '';
    this.props.onSubmit(value);
  }

  _onDocumentClick(event: Object) {
    const rootNode = ReactDOM.findDOMNode(this);
    if (!rootNode.contains(event.target)) {
        // Here we pass the event so the parent can manage focus.
      this.props.onCancel(event);
    }
  }

  _onDocumentKeydown(event: Object) {
    if (event.keyCode === 27) {
      this.props.onCancel();
    }
  }

  props: Props;
  render(): React.Element {
    const { props } = this;
    let className = cx(props.className, styles.root);
    return (
      <div className={ className }>
        <div className={ styles.inner }>
          <input
            ref={ this._setInputRef }
            type="text"
            placeholder="https://example.com/"
            className={ styles.input }
            onKeyPress={ this._onInputKeyPress }
          />
          <ButtonGroup className={ styles.buttonGroup }>
            <IconButton
              label="Cancel"
              iconName="cancel"
              onClick={ props.onCancel }
            />
            <IconButton
              label="Submit"
              iconName="accept"
              onClick={ this._onSubmit }
            />
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
