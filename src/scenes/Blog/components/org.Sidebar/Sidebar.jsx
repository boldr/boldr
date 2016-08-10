import React from 'react';
import classNames from 'classnames/bind';

import Author from '../mol.Author';
import TagBlock from '../mol.TagBlock';
import styles from './style.css';

const cx = styles::classNames;

const Sidebar = props => {
  return (
    <div className={ cx('sidebar') }>
      {/* <Author user={ props.user } /> */}
      <TagBlock tags={ props.tags } />
    </div>
  );
};

Sidebar.propTypes = {
  tags: React.PropTypes.array,
  user: React.PropTypes.object
};

export default Sidebar;
