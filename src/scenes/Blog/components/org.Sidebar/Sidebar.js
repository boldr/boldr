import React from 'react';
import Divider from '../../../../components/md/Dividers';

import Author from '../mol.Author';
import TagBlock from '../mol.TagBlock';


const Sidebar = props => {
  return (
    <div className={ cx('sidebar') }>
      <Author { ...props.author } />
      <Divider style={ { marginTop: '1em', marginBottom: '1em' } } />
      <TagBlock tags={ props.tags } />
    </div>
  );
};

Sidebar.propTypes = {
  tags: React.PropTypes.array,
  author: React.PropTypes.object
};

export default Sidebar;
