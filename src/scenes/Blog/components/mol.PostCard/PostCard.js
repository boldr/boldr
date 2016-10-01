import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import dateFns from 'date-fns';
import { Button, Card, Image } from 'stardust';
import { FlatButton } from 'components/md/Buttons';
import { Row } from 'components';
import TagBlock from '../mol.TagBlock';

const PostCard = props => {
  const formattedDate = dateFns.format(props.created_at, 'MM/DD/YYYY');
  return (
    <div>
      <Card fluid>

          <Image className="post__card-image" src={ props.feature_image } />
          <Card.Content>
          <Card.Header>
          { props.title }

        </Card.Header>
          <Card.Meta>
            { formattedDate }
          </Card.Meta>
       <Card.Description>
        { props.excerpt }
         </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Row>
        <Link to={ `/blog/${props.slug}` }>
          <FlatButton label="Read more" secondary />
        </Link>
        <TagBlock tags={ props.tags } />
        </Row>
        </Card.Content>
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
