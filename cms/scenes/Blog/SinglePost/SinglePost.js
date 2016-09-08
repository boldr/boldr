import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/es6';

import { provideHooks } from 'redial';
import { Grid, Col, Row } from '../../../components';
import Paper from '../../../components/md/Papers';
import Loader from '../../../components/atm.Loader';
import Sidebar from '../components/org.Sidebar';

import PostContent from '../components/mol.PostContent';
import { loadPost } from './actions';

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadPost(slug))
};

const SinglePost = ({ isLoading, currentPost }) => {
  return (
    <div className="postbg">
      <Grid fluid>
        <Row>
          <Col xs={ 12 } md={ 8 } lg={ 9 }>
              <Paper zDepth={ 2 }>
              {
                isLoading ?
                  <Loader /> :
                  <PostContent { ...currentPost } />
              }
              </Paper>
            </Col>
            <Col xs={ 12 } md={ 4 } lg={ 3 }>
              <Sidebar { ...currentPost } />
            </Col>
          </Row>
        </Grid>
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
