import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import { Row, Col } from '../../../../../components';
import { Card, CardMedia, CardTitle, CardActions, CardText } from '../../../../../components/md/Cards';
import { IconButton } from '../../../../../components/md/Buttons';
import styles from './style.css';

const cx = styles::classNames;

const FileView = props => {
  return (
      <Row>
        {
          props.files.map((file) =>
          <Col key={ file.id } xs={ 12 } md={ 3 } lg={ 4 }>
            <Card>
               <CardMedia
                 aspectRatio={ CardMedia.aspect.equal }
                 overlay={ <CardTitle title={ file.filename } /> }
               >
                <img className={ cx('fileview__img') } src={ file.s3url } alt={ file.filename } />
              </CardMedia>
              <CardActions centered>
                <IconButton>edit</IconButton>
                <IconButton>delete</IconButton>
              </CardActions>
            </Card>
          </Col>)
         }
      </Row>
  );
};

export default FileView;
