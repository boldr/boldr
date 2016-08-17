import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Head.css';
import logoImage from './boldr-white.png';

const cx = styles::classNames;

const Head = ({ toggleDropdownHandler, dropdownOpen, theme, closeHeaderDropdown }) =>
  <div
    className={ cx('head', [`theme-${theme}`], {
      dropdownOpen
    }) }
  >
    <button
      className={ cx('toggleButton', 'collapsed', { closeButton: dropdownOpen }) }
      onClick={ toggleDropdownHandler }
    >
      <span className={ cx('iconBar') } />
      <span className={ cx('iconBar') } />
      <span className={ cx('iconBar') } />
      <span className={ cx('iconBar') } />
    </button>
    <h1 className={ cx('brand') }>
      <a href="/" rel="home" className={ cx('logo') } onClick={ closeHeaderDropdown }>
      <img src={ logoImage } alt="logo" height="50px" />
      </a>
    </h1>
  </div>;

Head.propTypes = {
  toggleDropdownHandler: PropTypes.func,
  dropdownOpen: PropTypes.bool,
  theme: PropTypes.string,
  closeHeaderDropdown: PropTypes.func
};

export default Head;
