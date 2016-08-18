/* @flow */

import React, { Component } from 'react';
import autobind from 'class-autobind';

import IconButton from './IconButton';
import InputPopover from './InputPopover';

type Props = {
  iconName: string;
  showPopover: boolean,
  onTogglePopover: Function,
  onSubmit: Function;
};

export default class PopoverIconButton extends Component {

  constructor() {
    super(...arguments);
    autobind(this);
  }

  _renderPopover() {
    if (!this.props.showPopover) {
      return null;
    }
    return (
      <InputPopover
        onSubmit={ this._onSubmit }
        onCancel={ this._hidePopover }
      />
    );
  }

  _onSubmit() {
    this.props.onSubmit(...arguments);
  }

  _hidePopover() {
    if (this.props.showPopover) {
      this.props.onTogglePopover(...arguments);
    }
  }

  props: Props;
  render(): React.Element {
    const { showPopover } = this.props;
    let { onTogglePopover, ...props } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton { ...props } onClick={ onTogglePopover }>
        {this._renderPopover()}
      </IconButton>
    );
  }
}
