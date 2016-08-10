import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import SiteLogo from '../../atm.SiteLogo';
import styles from './Head.css';


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
      <SiteLogo SiteLogoOrTitle="Boldr" />
        <span style={ { color: '#fff' } }>Boldr</span>
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
