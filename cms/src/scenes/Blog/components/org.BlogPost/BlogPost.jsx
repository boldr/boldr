import React, { Component, PropTypes } from 'react';
import { Editor } from 'draft-js';
import { Link } from 'react-router';
import Moment from 'moment';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import classNames from 'classnames/bind';
import TextDisplay from 'components/org.Editor/Display/index';
import styles from '../../style.css';

const cx = styles::classNames;

const BlogPost = props => {
  const formattedDate = Moment(props.createdAt).format('MMMM Do YYYY, h:mm:ss a');
  const profileLink = `profile/public/${props.user.id}`;
  return (
      <Card>
        <h1>{ props.title }</h1>
        <div>
        { formattedDate }
        </div>

        <div>
          { props.displayName }
        </div>

        <TextDisplay content={ props.content } />

        <div className={ cx('post__card-footer') }>
          <Link to={ profileLink }>{ props.user.displayName }</Link>
        </div>
      </Card>
    );
};

BlogPost.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.date,
  displayName: PropTypes.string,
  content: PropTypes.object
};

export default BlogPost;
