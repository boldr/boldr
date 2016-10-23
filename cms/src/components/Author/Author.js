/* @flow */
import React from 'react';
import { Divider, Card, Comment } from 'semantic-ui-react';
import { Heading } from 'components/index';
import Avatar from '../Avatar';

const Author = (props: { display_name: String, avatar_url: String }) => {
  return (
    <div className="post__sidebar-author">
    <div className="post__sidebar-card">
    <Card.Content>
      <Avatar src={ props.avatar_url } />
      <Card.Header> { props.display_name }</Card.Header>
      </Card.Content>
      </div>
    </div>
  );
};

export default Author;
