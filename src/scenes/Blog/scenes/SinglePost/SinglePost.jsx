import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Moment from 'moment';
import Paper from 'material-ui/Paper';
import classNames from 'classnames/bind';
import { provideHooks } from 'redial';

import Loader from '../../../../components/atm.Loader';
import Sidebar from '../../components/org.Sidebar';

import PostContent from '../../components/mol.PostContent';
import styles from './style.css';
import { loadPost } from './actions';

const cx = styles::classNames;

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadPost(slug))
};

const SinglePost = ({ isLoading, currentPost }) => {
  return (
      <div className="grid">
        <div className="grid__row" style={ { padding: '1em' } }>
          <div className="grid__twothirds">
            <Paper style={ { padding: '1em' } } zDepth={ 2 }>
            {
              isLoading ?
                <Loader /> :
                <PostContent { ...currentPost } />
            }
            </Paper>
          </div>
          <div className="grid__third">
            <Sidebar { ...currentPost } />
          </div>
        </div>
      </div>
    );
};

SinglePost.propTypes = {
  isLoading: PropTypes.bool,
  currentPost: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    currentPost: state.currentPost,
    isLoading: state.currentPost.isLoading
  };
};

export default provideHooks(redial)(connect(mapStateToProps)(SinglePost));
