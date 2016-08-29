import { provideHooks } from 'redial';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Flex, Box } from 'reflexbox';

import Loader from '../../../components/atm.Loader';
import { fetchPostsIfNeeded } from '../state/post';
import PostCard from '../components/mol.PostCard';

import styles from './style.css';

const cx = styles::classNames;

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPostsIfNeeded())
})
class PostListing extends Component {
  componentDidMount() {
    this.props.fetchPostsIfNeeded();
  }
  render() {
    return (
      <div className={ cx('container') }>
        <Flex
          align="center"
          gutter={ 2 }
          justify="space-between"
          wrap
        >
            {
              this.props.posts.data.map(post =>
                <Box key={ post.id } sm={ 12 } md={ 4 } p={ 2 }>
                  <PostCard { ...post } />
                </Box>)
            }
        </Flex>
      </div>
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
