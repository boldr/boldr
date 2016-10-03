import React, { PropTypes } from 'react';

import { Grid, Row, Col } from 'components';
import PostCard from '../components/mol.PostCard';

const PostListingGroup = (props) => {
  if (!props.posts) {
    return (
      <div>Loading</div>
    );
  }
  return (
    <Grid fluid>
      <Row>
          {
            props.posts.map((post, i) =>
              <Col key={ i } xs={ 12 } md={ 4 }>
                <PostCard { ...post } />
              </Col>)
          }
      </Row>
    </Grid>
  );
};

PostListingGroup.propTypes = {
  posts: PropTypes.array
};

export default PostListingGroup;
