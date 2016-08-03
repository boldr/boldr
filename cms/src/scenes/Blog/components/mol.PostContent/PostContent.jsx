import React, { PropTypes } from 'react';
import TextDisplay from 'components/org.Editor/Display/index';

const PostContent = props => {
  return (
    <div>
      { props.title }
      <TextDisplay content={ props.content } />
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired
};

export default PostContent;
