/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row, Loader } from 'boldr-ui';
import { getPosts } from '../../../state/modules/blog/posts';
import { fetchTagsIfNeeded, fetchTagPostsIfNeeded } from '../../../state/modules/blog/tags/actions';
import TagList from './TagList';

type Props = {
  currentTag: Object,
  isFetching: boolean,
  posts: Array<Object>,
  params: Object,
  match: Object,
  listTags: Object,
  fetchTagPostsIfNeeded: () => void,
};

export class TagListContainer extends Component {
  static defaultProps: {
    match: {params: {name: ''}},
    fetchTagPostsIfNeeded: () => {},
  };

  componentDidMount() {
    const { fetchTagPostsIfNeeded, match: { params } } = this.props;

    fetchTagPostsIfNeeded(params.name);
  }

  props: Props;
  render() {
    if (this.props.isFetching) {
      return <Loader />;
    }
    return <TagList isFetching={ this.props.isFetching } listTags={ this.props.listTags } posts={ this.props.posts } />;
  }
}

const mapStateToProps = state => {
  return {
    posts: getPosts(state),
    listTags: state.blog.tags.all,
    isFetching: state.blog.tags.isFetching,
    currentTag: state.blog.tags.currentTag,
  };
};

export default connect(mapStateToProps, { fetchTagPostsIfNeeded })(TagListContainer);
