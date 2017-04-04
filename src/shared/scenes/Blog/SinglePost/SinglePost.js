// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import classnames from 'classnames';
import { Grid, Row, Col, Heading, StyleClasses } from 'boldr-ui';
import { getPosts } from '../../../state/modules/blog/posts';
import { PostSidebar, PostContent, PostComments, PostTitle } from '../components';

const BASE_ELEMENT = StyleClasses.SINGLE_POST;

export type Props = {
  loading: boolean,
  className: ?string,
  entities: Object,
  currentPost: Object,
  sidebarClassName: ?string,
  dispatch: Function,
  params: Object,
};

const mapStateToProps = (state, ownProps) => {
  return {
    entities: state.entities,
    currentPost: state.blog.posts.currentPost,
  };
};

@connect(mapStateToProps)
class SinglePost extends Component {
  props: Props;

  displaySinglePost = () => {
    const { currentPost, entities, className } = this.props;
    const { author } = currentPost;
    const postAuthor = entities.users[author];

    const classes = classnames(BASE_ELEMENT, className);
    return (
      <div className={ classes }>
        {this.renderPostBg()}
        <Grid>
          <Row>
            <Col sm={ 12 } md={ 8 } lg={ 9 }>
              <PostContent { ...currentPost } />
              {!currentPost.comments
                ? null
                : <PostComments
                  comments={ currentPost.comments.map(c => entities.comments[c]) }
                  postId={ currentPost.id }
                  userEntities={ entities.users }
                />}
            </Col>
            {!currentPost.tags
              ? null
              : <Col sm={ 12 } md={ 4 } lg={ 3 }>
                <PostSidebar
                  postAuthor={ entities.users[author] }
                  postTags={ currentPost.tags.map(id => entities.tags[id]) }
                  className={ this.props.sidebarClassName }
                  { ...currentPost }
                />
              </Col>}
          </Row>
        </Grid>
      </div>
    );
  };
  renderPostBg = () => {
    const { currentPost } = this.props;
    const PostBg = styled.section`
      max-height: 400px;
      min-height: 400px;
      height: 100%;
      overflow: hidden;
      width: 100%;
      background-size: cover;
      background-attachment: fixed;
      background-image: url(${currentPost.backgroundImage});
      align-items: center;
      background-position-x: 0px;
      background-position-y: 0px;
      margin-bottom: 30px;
    `;
    return <PostBg><PostTitle title={ currentPost.title } /></PostBg>;
  };
  render() {
    const { currentPost } = this.props;

    return (
      <div>
        <Helmet title={ currentPost.title } />
        {this.displaySinglePost()}
      </div>
    );
  }
}

export default SinglePost;
