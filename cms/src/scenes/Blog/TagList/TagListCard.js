// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import dateFns from 'date-fns';
import { Card } from 'semantic-ui-react';
import { FlatButton, IconButton } from 'components/Buttons';
import Avatar from 'components/Avatar';

type Props = {
  title: string,
  created_at: string,
  display_name?: string,
  feature_image?: string,
  excerpt?: string,
  tags?: Array<any>,
  content: Object,
  user?: Object,
  slug: string,
};

const TagListCard = (props: Props) => {
  const formattedDate = dateFns.format(props.created_at, 'MM/DD/YYYY');

  const overlay = (
    <Card.Header
      key="overlay"
      title={ props.title }
      subtitle={ formattedDate }
    >
      <IconButton className="margin-left-auto">star_outline</IconButton>
    </Card.Header>
  );
  return (
    <div>
      <Card>
        <Card.Image overlay={ overlay }>
          <img className="post__card-image" src={ props.feature_image } height="350px" width="100%" />
        </Card.Image>

        <Card.Meta>
        <Link to={ `/blog/${props.slug}` }>
          <FlatButton label="Read more" secondary />
        </Link>
        </Card.Meta>
        <Card.Description>
        { props.excerpt }
        </Card.Description>
      </Card>
      </div>
    );
};

export default TagListCard;
