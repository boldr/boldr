import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Loader } from 'components';
import { getPostsArray, fetchPosts } from 'state/dux/post';
import PostListingGroup from './PostListingGroup';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPosts())
})
class PostListing extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
        this.props.isLoading ?
           <Loader /> :
          <PostListingGroup posts={ this.props.posts.results } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostListing);

PostListing.propTypes = {
  posts: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  fetchPosts: PropTypes.func
};
