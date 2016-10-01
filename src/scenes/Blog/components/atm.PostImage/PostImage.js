import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = styles::classNames;

const PostImage = (props) => {
  return (
    <div className={ cx('postimage__wrap') }>
      <img src={ props.imageSrc } alt="post image" className={ cx('postimage') } />
    </div>
  );
};

PostImage.propTypes = {
  imageSrc: React.PropTypes.string.isRequired
};

export default PostImage;
