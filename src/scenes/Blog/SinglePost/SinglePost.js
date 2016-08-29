import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Moment from 'moment';
import Paper from 'material-ui/Paper';
import { Flex, Box } from 'reflexbox';
import classNames from 'classnames/bind';
import { provideHooks } from 'redial';

import Loader from '../../../components/atm.Loader';
import Sidebar from '../components/org.Sidebar';

import PostContent from '../components/mol.PostContent';
import styles from './style.css';
import { loadPost } from './actions';

const cx = styles::classNames;

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadPost(slug))
};

const SinglePost = ({ isLoading, currentPost }) => {
  return (
      <div className="grid">
      <div className="postbg">
      <div className={ cx('container') }>
          <Flex
            gutter={ 2 }
            justify="space-between"
          >
            <Box
              col={ 8 }
              p={ 2 }
            >
            <Paper zDepth={ 2 }>
            {
              isLoading ?
                <Loader /> :
                <PostContent { ...currentPost } />
            }
            </Paper>
            </Box>
          <Box
            col={ 4 }
            p={ 2 }
          >
            <Sidebar { ...currentPost } />
          </Box>
        </Flex>
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
