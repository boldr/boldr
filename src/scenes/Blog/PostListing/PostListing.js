import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Loader } from 'components';
import { getPostsArray } from 'state/dux/post';
import PostListingGroup from './PostListingGroup';

const PostListing = (props) => {
  return (
          props.isLoading ? <Loader /> :
          <PostListingGroup posts={ props.allPosts } />
  );
};

const mapStateToProps = (state) => {
  return {
    allPosts: getPostsArray(state),
    isLoading: state.posts.isLoading
  };
};

export default connect(mapStateToProps)(PostListing);

PostListing.propTypes = {
  allPosts: PropTypes.array.isRequired,
  isLoading: PropTypes.bool
};
