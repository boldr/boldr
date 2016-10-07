import { provideHooks } from 'redial';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Loader from '../../../components/Loader';
import PostCard from '../components/mol.PostCard';

class Search extends Component {
  render() {
    return (
      <div>
        {
          this.props.posts.data.map(post =>
            <div key={ post.id } className="post__grid-item">
              <PostCard { ...post } />
            </div>)
        }
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

export default connect(mapStateToProps)(Search);

Search.propTypes = {
  posts: React.PropTypes.object.isRequired
};
