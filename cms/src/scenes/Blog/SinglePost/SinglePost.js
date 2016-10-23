// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'components/index';
import Paper from 'components/md/Papers';
import Loader from 'components/Loader';
import PostSidebar from 'components/PostSidebar';
import PostContent from 'components/PostContent';

export type Props = {
  isLoading: boolean,
  currentPost: Object,
};


const SinglePost = (props: Props) => {
  const IS = {
    bg: {
      backgroundImage: `url(${props.currentPost.feature_image})`,
      width: '100%',
      paddingTop: '175px'
    },
    offSet: {
      marginBottom: '-150px'
    }
  };
  return (
    <div style={ IS.bg }>
      <Grid fluid>
        <Row>
          <Col xs={ 12 } md={ 8 } lg={ 9 }>
              <Paper zDepth={ 2 } style={ IS.offSet }>
              {
                props.isLoading ?
                  <Loader /> :
                  <PostContent { ...props.currentPost } />
              }
              </Paper>
            </Col>
            <Col xs={ 12 } md={ 4 } lg={ 3 }>
              <PostSidebar { ...props.currentPost } />
            </Col>
          </Row>
        </Grid>
      </div>
    );
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    currentPost: state.posts.bySlug[ownProps.params.slug],
    isLoading: state.currentPost.isLoading
  };
};

export default connect(mapStateToProps)(SinglePost);
