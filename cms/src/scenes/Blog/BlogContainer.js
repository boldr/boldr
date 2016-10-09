/* @flow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PrimaryHeader from 'components/PrimaryHeader';
import { fetchPosts } from 'state/dux/post';

const BlogContainer = (props: { children: any }) => {
  return (
    <div>
        <PrimaryHeader />
        { props.children }
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loading: state.posts.isLoading
  };
};

export default connect(mapStateToProps)(BlogContainer);
