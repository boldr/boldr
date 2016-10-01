import React from 'react';
import classNames from 'classnames/bind';
const PostImage = (props) => {
  return (
    <div className="postimage__wrap">
      <img src={ props.imageSrc } alt="post image" className="postimage" />
    </div>
  );
};

PostImage.propTypes = {
  imageSrc: React.PropTypes.string.isRequired
};

export default PostImage;
