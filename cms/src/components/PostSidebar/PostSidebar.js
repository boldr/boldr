import React from 'react';
import Divider from 'components/md/Dividers';

import Author from '../Author';
import TagBlock from '../TagBlock';


const PostSidebar = props => {
  return (
    <div className="sidebar">
      <Author { ...props.author } />
      <Divider style={ { marginTop: '1em', marginBottom: '1em' } } />
      <TagBlock tags={ props.tags } />
    </div>
  );
};

PostSidebar.propTypes = {
  tags: React.PropTypes.array,
  author: React.PropTypes.object
};

export default PostSidebar;
