/* @flow */
import React from 'react';

const PostImage = (props: { imageSrc: String }) => {
  return (
    <div className="postimage__wrap">
      <img src={ props.imageSrc } alt="post image" className="postimage" />
    </div>
  );
};

export default PostImage;
