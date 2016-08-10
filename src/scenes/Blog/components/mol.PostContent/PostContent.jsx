import React, { PropTypes } from 'react';
const PostContent = props => {
  return (
    <div>
      { props.title }
      <div
            className="content"
            dangerouslySetInnerHTML={ props.content }
          />
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default PostContent;
