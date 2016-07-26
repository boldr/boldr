import { provideHooks } from 'redial';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { fetchPostsIfNeeded } from './state/postReducer';
import BlogPost from './components/org.BlogPost';

import styles from './style.css';

const cx = styles::classNames;

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPostsIfNeeded())
})
class Blog extends Component {

  static propTypes = {
    post: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.createPostsCollection = (postsCollection) => this._createPostsCollection(postsCollection);
  }

  _createPostsCollection(posts) {
    let postsCollection = [];
    for (let post of posts) { // eslint-disable-line
      postsCollection.push(
        <div className={ cx('post__card') }>
          <BlogPost { ...post } key={ post.id } />
        </div>
      );
    }
    return postsCollection;
  }
  render() {
    const postsCollection = this.createPostsCollection(this.props.post.posts);
    return (
      <section className={ cx('post__card-wrap') }>
        Blog
        {
          this.props.post.isLoading ? <h1>Loading ...</h1> : postsCollection
        }
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post,
    isLoading: state.post.isLoading
  };
};


export default connect(mapStateToProps)(Blog);
