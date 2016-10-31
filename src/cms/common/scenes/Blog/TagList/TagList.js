/* @flow */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { Grid, Col, Row } from 'components/Layout';
import { requestPostTags } from 'state/dux/tag';
import TagListCard from './TagListCard';

export type Props = {tags: Object, requestPostTags: Function};

@asyncConnect([{
  promise: ({ store: { dispatch, getState }, params: { name } }) => {
    const promises = [];
    promises.push(dispatch(requestPostTags(name)));
    return Promise.all(promises);
  }
}])
class TagList extends Component {
  componentDidMount() {
    this.props.requestPostTags(this.props.params.name);
  }
  props: Props;
  render() {
    if (!this.props.tags.posts) {
      return (
      <div>
        Loading
      </div>
      );
    }
    return (
      <div>
        <Grid fluid>
        <Row>
        {
          this.props.tags.posts.map(post =>
            <Col key={ post.id } xs={ 12 } md={ 4 }>
              <TagListCard { ...post } />
            </Col>)
        }
        </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    isLoading: state.tags.isLoading,
    posts: state.tags.posts
  };
};

export default connect(mapStateToProps, { requestPostTags })(TagList);
