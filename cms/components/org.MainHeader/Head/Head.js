import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import FontIcon from '../../md/FontIcons/FontIcon';
import styles from './Head.css';

const cx = styles::classNames;

const Head = ({ toggleDropdownHandler, logo, siteName, dropdownOpen, theme, closeHeaderDropdown }) =>
  <div
    className={ cx('head', 'theme-dark', {
      dropdownOpen
    }) }
  >
    <button
      className={ cx('toggleButton', 'collapsed', { closeButton: dropdownOpen }) }
      onClick={ toggleDropdownHandler }
    >
      <FontIcon>menu</FontIcon>
    </button>
    <a href="/" rel="home" className={ cx('logo') } onClick={ closeHeaderDropdown }>
      {
        logo ?
        <img src={ logo } alt="logo" height="50px" /> :
        <h1 className={ cx('brand') }>{ siteName }</h1>
      }
      </a>
  </div>;

Head.propTypes = {
  toggleDropdownHandler: PropTypes.func,
  dropdownOpen: PropTypes.bool,
  theme: PropTypes.string,
  closeHeaderDropdown: PropTypes.func,
  logo: PropTypes.string,
  siteName: PropTypes.string
};

export default Head;
