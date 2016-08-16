import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Moment from 'moment';
import Paper from 'material-ui/Paper';
import classNames from 'classnames/bind';
import { provideHooks } from 'redial';

import Loader from '../../../../components/atm.Loader';
import Sidebar from '../org.Sidebar';
import { loadPost } from '../../state/post';
import PostContent from '../../components/mol.PostContent';
import styles from './style.css';

const cx = styles::classNames;

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadPost(slug))
};

const SinglePost = ({ isLoading, selectedPost }) => {
  return (
      <div className="grid">
        <div className="grid__row" style={ { padding: '1em' } }>
          <div className="grid__twothirds">
            <Paper style={ { padding: '1em' } } zDepth={ 2 }>
            {
              isLoading ?
                <Loader /> :
                <PostContent { ...selectedPost } />
            }
            </Paper>
          </div>
          <div className="grid__third">
            <Sidebar { ...selectedPost } />
          </div>
        </div>
      </div>
    );
};

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

export default provideHooks(redial)(connect(mapStateToProps)(SinglePost));
