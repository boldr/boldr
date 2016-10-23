/* @flow */
import React from 'react';
import { Card } from 'semantic-ui-react';
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
