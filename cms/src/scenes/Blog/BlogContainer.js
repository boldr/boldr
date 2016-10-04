/* @flow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PrimaryHeader from 'components/org.PrimaryHeader';
import { fetchPosts } from 'state/dux/post';

// $FlowFixMe
const BlogContainer = (props: { children: any } ) => {
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

// $FlowFixMe
export default connect(mapStateToProps)(BlogContainer);
