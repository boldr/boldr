import { provideHooks } from 'redial';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Loader from 'components/atm.Loader';
import { fetchPostsIfNeeded } from './state/post';
import PostCard from './components/mol.PostCard';

import styles from './style.css';

const cx = styles::classNames;

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPostsIfNeeded())
})
class Blog extends Component {

  static propTypes = {
    posts: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.createPostsCollection = (postsCollection) => this._createPostsCollection(postsCollection);
  }

  _createPostsCollection(data) {
    let postsCollection = []; // eslint-disable-line
    for (let post of data) { // eslint-disable-line
      postsCollection.push(
        <div key={ post.id } className="col-xs-6 col-md-4" style={ { marginTop: '25px' } }>
          <PostCard { ...post } />
        </div>
      );
    }
    return postsCollection;
  }
  render() {
    const postsCollection = this.createPostsCollection(this.props.posts.data);
    return (
      <div className="container-fluid">
      <section className="row">

        {
          this.props.posts.isLoading ? <Loader /> : postsCollection
        }

      </section>
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


export default connect(mapStateToProps)(Blog);
