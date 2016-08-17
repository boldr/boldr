import React, { Component, PropTypes } from 'react';
import styles from './DropdownListItem.css';
import classNames from 'classnames/bind';

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

  componentDidMount() {
    const { item } = this.props;
    if (item.highlight && item.highlight.thumbnail) {
      const preloadImage = new Image();
      preloadImage.src = item.highlight.thumbnail;
    }
  }

  render() {
    const { hasArrow, parentClass, highlightHandler, item, closeDropdowns } = this.props;
    const logos = {
      auth0: 'https://styleguide.auth0.com/lib/logos/img/badge.png',
      webtask: 'https://webtask.io/images/symbol.svg'
    };
    const linkExternal = item.external ? 'external' : null;
    return (
      <li
        className={cx({
          item: !hasArrow,
          arrowItem: hasArrow,
          moreItem: parentClass === 'moreDropdown'
        })}
        onMouseEnter={() => {highlightHandler(item.highlight);}}
        onFocus={() => {highlightHandler(item.highlight);}}
      >
        <a href={item.href} onClick={closeDropdowns} rel={linkExternal}>
          {item.icon
            ? <img src={logos[item.icon]} className={cx('icon')} role="presentation" alt="" />
            : null
          }
          <span className={cx('text')}>{item.name}</span>
        </a>
      </li>
    );
  }
}

export default DropdownListItem;
