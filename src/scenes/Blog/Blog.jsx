import { provideHooks } from 'redial';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from './state/postReducer';

import BlogPost from './components/org.BlogPost';
@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPostsIfNeeded())
})
class Blog extends Component {
  constructor(props) {
    super(props);
    this.createPostsCollection = (postsCollection) => this._createPostsCollection(postsCollection);
  }

  _createPostsCollection(posts) {
    const postsCollection = [];
    for (let post of posts) { // eslint-disable-line
      postsCollection.push(
        <div key={ post.id }>
          <BlogPost { ...post } />
        </div>
      );
    }
    return postsCollection;
  }
  render() {
    let postsCollection = this.createPostsCollection(this.props.post.posts);
    return (
      <div>
        Blog
        {
          this.props.post.isLoading ? <h1>Loading ...</h1> : postsCollection
        }
      </div>
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
