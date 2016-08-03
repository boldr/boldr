import React from 'react';
import TextDisplay from 'components/org.Editor/Display/index';

const PostContent = props => {
  return (
    <div>
      { props.title }
      <TextDisplay content={ props.content } />
    </div>
  );
};

export default PostContent;
