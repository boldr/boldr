import React from 'react';
import { Divider, Card, Comment } from 'semantic-ui-react';
import { Heading } from 'components';
import Avatar from 'components/md/Avatars';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
};
const Author = (props) => {
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

Author.propTypes = {
  display_name: React.PropTypes.string.isRequired,
  avatar_url: React.PropTypes.string
};

export default Author;
