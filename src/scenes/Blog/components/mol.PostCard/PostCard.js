import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';
import classNames from 'classnames/bind';

import TagBlock from '../mol.TagBlock';
import FontIcon from '../../../../components/md/FontIcons';
import { FlatButton, IconButton } from '../../../../components/md/Buttons';
import { Card, CardMedia, CardTitle, CardActions, CardText } from '../../../../components/md/Cards';
import Avatar from '../../../../components/md/Avatars';
import { Row } from '../../../../components';
import styles from './style.css';

const cx = styles::classNames;

const PostCard = props => {
  const formattedDate = Moment(props.created_at).format('MMMM Do YYYY, h:mm:ss a');
  // const profileLink = `profile/public/${props.author.id}`;
  const overlay = (
    <CardTitle
      key="overlay"
      title={ props.title }
      subtitle={ formattedDate }
    >
      <IconButton className="margin-left-auto">star_outline</IconButton>
    </CardTitle>
  );
  return (
    <div>
      <Card>
        <CardMedia overlay={ overlay }>
          <img className={ cx('post__card-image') } src={ props.feature_image } height="350px" />
        </CardMedia>
        <CardTitle
          avatar={ <Avatar src={ props.author.avatar_url } alt="Author avatar image" /> }
          title={ props.author.display_name }
        />
        <div className={ cx('post__card-footer') }>
          <Row>
            <TagBlock tags={ props.tags } />
          </Row>
        </div>
        <CardActions isExpander>
        <Link to={ `/blog/${props.slug}` }>
          <FlatButton label="Read more" secondary />
        </Link>
        </CardActions>
        <CardText expandable>
        { props.excerpt }
        </CardText>
      </Card>
      </div>
    );
};

PostCard.propTypes = {
  title: PropTypes.string,
  created_at: PropTypes.string,
  display_name: PropTypes.string,
  feature_image: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.array,
  content: PropTypes.string,
  author: PropTypes.object,
  slug: PropTypes.string
};

export default PostCard;
