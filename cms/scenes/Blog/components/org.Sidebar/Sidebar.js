import React from 'react';
import classNames from 'classnames/bind';
import Divider from '../../../../components/md/Dividers';

import Author from '../mol.Author';
import TagBlock from '../mol.TagBlock';
import styles from './style.css';

const cx = styles::classNames;

const Sidebar = props => {
  return (
    <div className={ cx('sidebar') }>
      <Author { ...props.user } />
      <Divider style={ { marginTop: '1em', marginBottom: '1em' } } />
      <TagBlock tags={ props.tags } />
    </div>
  );
};

Sidebar.propTypes = {
  tags: React.PropTypes.array,
  user: React.PropTypes.object
};

export default Sidebar;
