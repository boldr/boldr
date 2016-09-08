/* @flow */
import React, { Component } from 'react';
import cx from 'classnames';
import autobind from 'class-autobind';

// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './Dropdown.css';

type Props = {
  choices: Map<string, string>;
  selectedKey: ?string;
  onChange: (selectedKey: string) => any;
  className?: string;
};

export default class Dropdown extends Component {
  constructor() {
    super(...arguments);
    autobind(this);
  }

  _onChange(event: Object) {
    const value: string = event.target.value;
    this.props.onChange(value);
  }

  _renderChoices(): Array<React.Element> {
    const { choices } = this.props;
    const entries = Array.from(choices.entries());
    return entries.map(([key, text]) => (
      <option key={ key } value={ key }>{text}</option>
    ));
  }
  props: Props;

  render(): React.Element {
    let { choices, selectedKey, className, ...otherProps } = this.props; // eslint-disable-line
    className = cx(className, styles.root);
    let selectedValue = (selectedKey === null) ? '' : choices.get(selectedKey);
    return (
      <span className={ className } title={ selectedValue }>
        <select { ...otherProps } value={ selectedKey } onChange={ this._onChange }>
          {this._renderChoices()}
        </select>
        <span className={ styles.value }>{selectedValue}</span>
      </span>
    );
  }
}
