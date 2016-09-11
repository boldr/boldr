import { provideHooks } from 'redial';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Loader, Grid, Row, Col } from '../../../components';
import { fetchPostsIfNeeded } from '../state/post';
import PostCard from '../components/mol.PostCard';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPostsIfNeeded())
})
class PostListing extends Component {
  componentDidMount() {
    this.props.fetchPostsIfNeeded();
  }
  render() {
    return (
      <Grid fluid>
        <Row>
            {
              this.props.posts.results.map(post =>
                <Col key={ post.id } xs={ 12 } md={ 4 }>
                  <PostCard { ...post } />
                </Col>)
            }
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading
  };
};

export default connect(mapStateToProps, { fetchPostsIfNeeded })(PostListing);

PostListing.propTypes = {
  fetchPostsIfNeeded: React.PropTypes.func,
  posts: React.PropTypes.object.isRequired
};
