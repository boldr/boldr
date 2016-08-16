import React, { PropTypes } from 'react';

const PostContent = props => {
  function createMarkup() { return { __html: props.content }; }
  return (
    <div>
      { props.title }
      <div className="content" dangerouslySetInnerHTML={ createMarkup() } />
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any
};

export default PostContent;
