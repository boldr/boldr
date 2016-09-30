import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import dateFns from 'date-fns';
import classNames from 'classnames/bind';
import { Button, Card, Image } from 'stardust';
import TagBlock from '../mol.TagBlock';
import FontIcon from 'components/md/FontIcons';
import { FlatButton, IconButton } from '../../../../components/md/Buttons';
// import { Card, CardMedia, CardTitle, CardActions, CardText } from '../../../../components/md/Cards';
import Avatar from '../../../../components/md/Avatars';
import { Row } from '../../../../components';

const cx = styles::classNames;

const PostCard = props => {
  const formattedDate = dateFns.format(props.created_at, 'MM/DD/YYYY');
  // const profileLink = `profile/public/${props.author.id}`;
  // const overlay = (
  //   <CardTitle
  //     key="overlay"
  //     title={ props.title }
  //     subtitle={ formattedDate }
  //   >        <CardTitle
  //             avatar={ <Link to={`/profile/public/${props.author.id}`}><Avatar src={ props.author.avatar_url } alt="Author avatar image" /></Link> }
  //             title={ props.author.display_name }
  //           />
  //     <IconButton className="margin-left-auto">star_outline</IconButton>
  //   </CardTitle>
  // );
  return (
    <div>
      <Card fluid>

          <Image className={ cx('post__card-image') } src={ props.feature_image } />
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
