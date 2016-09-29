import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PrimaryHeader from 'components/org.PrimaryHeader';
import inlineStyles from '../../theme/inlineStyles';

const BlogContainer = (props) => {
  return (
    <div>
      <div style={ inlineStyles.headerOverflow }>
        <PrimaryHeader />
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

export default connect(mapStateToProps)(BlogContainer);

BlogContainer.propTypes = {
  children: PropTypes.element
};
