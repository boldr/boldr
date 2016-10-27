// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { format } from 'date-fns';
import { Card, Button } from 'semantic-ui-react';
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
  const formattedDate = format(props.created_at, 'MM/DD/YYYY');

  const overlay = (
    <Card.Header
      key="overlay"
      title={ props.title }
      subtitle={ formattedDate }
    />
  );
  return (
    <div>
      <Card>
        <Card.Image overlay={ overlay }>
          <img className="post__card-image" src={ props.feature_image }
            alt={ props.title } height="350px" width="100%"
          />
        </Card.Image>

        <Card.Meta>
        <Link to={ `/blog/${props.slug}` }>
          <Button>Read more</Button>
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
