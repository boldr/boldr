/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Loader } from 'components/index';
import { getPosts, fetchPosts } from 'state/dux/post';
import type { Post } from 'state/dux/post';
import PostListingGroup from './PostListingGroup';
import { fetchArticles, getArticles } from 'state/dux/article';

export type Props = {
  posts: Array<Post>,
  isLoading: ?Boolean,
  fetchPosts: Function
};

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPosts()),
  defer: ({ dispatch }) => dispatch(fetchArticles())
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
          <PostListingGroup posts={ this.props.posts } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
    isLoading: state.posts.isLoading,
    articles: getArticles(state)
  };
};

export default connect(mapStateToProps, { fetchPosts, fetchArticles })(PostListing);
