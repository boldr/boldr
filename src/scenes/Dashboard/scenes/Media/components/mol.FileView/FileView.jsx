import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = styles::classNames;

const FileView = props => {
  return (
    <div className={ cx('fileview__wrap') }>
         {
          props.files.map((file) =>
           <div key={ file.id } className={ cx('Fileview__card') }>
            <img className={ cx('fileview__img') } src={file.s3url} />
            </div>)
         }
    </div>
  );
};

export default FileView;
