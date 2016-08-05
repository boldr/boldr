import React from 'react';
import classNames from 'classnames/bind';

import styles from './style.css';

const cx = styles::classNames;

const Sidebar = props => {
  return (
    <div className={ cx('sidebar') }>
    Sidebar
    </div>
  );
};

export default Sidebar;
