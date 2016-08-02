import { provideHooks } from 'redial';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { fetchPostsIfNeeded } from './state/blog';
import PostCard from './components/mol.PostCard';

import styles from './style.css';

const cx = styles::classNames;

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPostsIfNeeded())
})
class Blog extends Component {

  static propTypes = {
    blog: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.createPostsCollection = (postsCollection) => this._createPostsCollection(postsCollection);
  }

  _createPostsCollection(posts) {
    let postsCollection = []; // eslint-disable-line
    for (let post of posts) { // eslint-disable-line
      postsCollection.push(
        <div key={ post.id } className="blog__post col-xs-6 col-md-4">
          <PostCard { ...post } />
        </div>
      );
    }
    return postsCollection;
  }
  render() {
    const postsCollection = this.createPostsCollection(this.props.blog.posts);
    return (
      <section className="row">
        <div className={ cx('blog__post-wrap') }>
        {
          this.props.blog.isLoading ? <h1>Loading ...</h1> : postsCollection
        }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: state.blog,
    isLoading: state.blog.isLoading
  };
};


export default connect(mapStateToProps)(Blog);