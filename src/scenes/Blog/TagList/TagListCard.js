import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';
import classNames from 'classnames/bind';

import TagBlock from '../components/mol.TagBlock';
import FontIcon from '../../../components/md/FontIcons';
import { FlatButton, IconButton } from '../../../components/md/Buttons';
import { Card, CardMedia, CardTitle, CardActions, CardText } from '../../../components/md/Cards';
import Avatar from '../../../components/md/Avatars';

import styles from './style.css';

const cx = styles::classNames;

const TagListCard = props => {
  const formattedDate = Moment(props.createdAt).format('MMMM Do YYYY, h:mm:ss a');

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
          <img className={ cx('post__card-image') } src={ props.featureImage } height="350px" width="100%" />
        </CardMedia>

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

TagListCard.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  displayName: PropTypes.string,
  featureImage: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.array,
  content: PropTypes.string,
  user: PropTypes.object,
  slug: PropTypes.string
};

export default TagListCard;
