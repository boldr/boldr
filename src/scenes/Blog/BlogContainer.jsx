import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/org.MainHeader';
import inlineStyles from '../../core/inlineStyles';
import { fetchPostsIfNeeded } from './state/post';
import PostListing from './components/pg.PostListing';

const BlogContainer = (props) => {
  return (
    <div>
      <div style={ inlineStyles.headerOverflow }>
        <Header theme="dark" />
      </div>
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

export default connect(mapStateToProps, { fetchPostsIfNeeded })(BlogContainer);

BlogContainer.propTypes = {
  children: PropTypes.element
};
