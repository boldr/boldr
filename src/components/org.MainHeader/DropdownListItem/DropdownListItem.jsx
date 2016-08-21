import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './DropdownListItem.css';


const cx = styles::classNames;

class DropdownListItem extends Component {
  static propTypes = {
    item: PropTypes.object,
    highlightHandler: PropTypes.func,
    dropdownReference: PropTypes.object,
    hasArrow: PropTypes.bool,
    parentClass: PropTypes.string,
    closeDropdowns: PropTypes.func
  }

  render() {
    const { hasArrow, parentClass, highlightHandler, item, closeDropdowns } = this.props;
    const linkExternal = item.external ? 'external' : null;
    return (
      <li
        className={ cx({
          item: !hasArrow,
          arrowItem: hasArrow,
          moreItem: parentClass === 'moreDropdown'
        }) }
        onMouseEnter={ () => {highlightHandler(item.highlight);} }
        onFocus={ () => {highlightHandler(item.highlight);} }
      >
        <a href={ item.href } onClick={ closeDropdowns } rel={ linkExternal }>
          <span className={ cx('text') }>{item.name}</span>
        </a>
      </li>
    );
  }
}

export default DropdownListItem;
