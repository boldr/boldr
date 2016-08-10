import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPostsListing } from './state/post';

import PostListing from './components/pg.PostListing';

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loading: state.posts.isLoading
  };
};

export default connect(mapStateToProps, { getPostsListing })(PostListing);
