import React, { Component, PropTypes } from 'react';
import { Editor } from 'draft-js';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Moment from 'moment';
import Paper from 'material-ui/Paper';

import { provideHooks } from 'redial';
import Loader from 'components/atm.Loader';
import Sidebar from '../org.Sidebar';
import { fetchPost } from '../../state/post';
import PostContent from '../../components/mol.PostContent';

@provideHooks({
  fetch: ({ dispatch, params: { slug } }) => dispatch(fetchPost(slug))
})
class SinglePost extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={ { padding: '1em' } }>
          <div className="col-md-9">
            <Paper style={ { padding: '1em' } } zDepth={ 2 }>
            {
              this.props.isLoading ?
                <Loader /> :
                <PostContent { ...this.props.selectedPost } />
            }
            </Paper>
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

SinglePost.propTypes = {
  isLoading: PropTypes.bool,
  selectedPost: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading,
    selectedPost: state.posts.selectedPost
  };
};

export default connect(mapStateToProps)(SinglePost);
