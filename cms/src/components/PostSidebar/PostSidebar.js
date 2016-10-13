import React from 'react';
import { Divider, Card, Header, Segment } from 'semantic-ui-react';

import Author from '../Author';
import TagBlock from '../TagBlock';


const PostSidebar = props => {
  return (
    <div className="sidebar">
      <Segment raised>
      <Header as="h2">About the author</Header>
      <Author { ...props.author } />
      </Segment>
      <Segment raised>
      <Header as="h2">Tags</Header>

      <TagBlock tags={ props.tags } />

      </Segment>
    </div>
  );
};

PostSidebar.propTypes = {
  tags: React.PropTypes.array,
  author: React.PropTypes.object
};

export default PostSidebar;
