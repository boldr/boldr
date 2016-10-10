/* @flow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Loader } from 'components/index';
import { getAllPosts, fetchPosts } from 'state/dux/post';
import PostListingGroup from './PostListingGroup';

export type Props = {
  posts: Object,
  isLoading?: boolean,
  fetchPosts: Function
};

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPosts())
})
class PostListing extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  props: Props;
  render() {
    return (
        this.props.isLoading ?
           <Loader /> :
          <PostListingGroup posts={ this.props.posts.entities } />
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
