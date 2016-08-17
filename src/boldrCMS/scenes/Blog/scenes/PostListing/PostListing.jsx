import { provideHooks } from 'redial';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import Loader from '../../../../components/atm.Loader';
import { fetchPostsIfNeeded } from '../../state/post';
import PostCard from '../../components/mol.PostCard';

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
      <div className={ cx('post__grid') }>
        {
          this.props.posts.data.map(post =>
            <div key={ post.id } className={ cx('post__grid-item') }>
              <PostCard { ...post } />
            </div>)
        }
      </div>
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
