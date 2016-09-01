import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = styles::classNames;

const FileView = props => {
  return (
    <div className={ cx('fileview__wrap') }>
         {
          props.files.map((file) =>
           <div key={ file.id } className={ cx('Fileview__card') }>
            <img className={ cx('fileview__img') } src={ file.s3url } />
            </div>)
         }
    </div>
  );
};

export default FileView;
