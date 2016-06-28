import React, { Component, PropTypes } from 'react';


export default class BlockAction extends Component {

  static propTypes = {
    item: React.PropTypes.shape({
      key: PropTypes.string.isRequired,
      icon: PropTypes.func.isRequired,
      action: PropTypes.func.isRequired
    })
  }

  render() {
    const Icon = this.props.item.icon;
    return(
      <li className="block__action" onClick={this.props.item.action}>
        <Icon className="block__action__icon" />
      </li>
    );
  }
}
