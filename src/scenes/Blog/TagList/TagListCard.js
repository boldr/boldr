import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import dateFns from 'date-fns';

import TagBlock from '../components/mol.TagBlock';
import FontIcon from '../../../components/md/FontIcons';
import { FlatButton, IconButton } from '../../../components/md/Buttons';
import { Card, CardMedia, CardTitle, CardActions, CardText } from '../../../components/md/Cards';
import Avatar from '../../../components/md/Avatars';

const TagListCard = props => {
  const formattedDate = dateFns.format(props.created_at, 'MM/DD/YYYY');

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
          <img className={ cx('post__card-image') } src={ props.feature_image } height="350px" width="100%" />
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
  display_name: PropTypes.string,
  feature_image: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.array,
  content: PropTypes.string,
  user: PropTypes.object,
  slug: PropTypes.string
};

export default TagListCard;
