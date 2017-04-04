/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LAYOUTS } from '../../../core/constants';
import { changeLayout } from '../../../state/modules/boldr/ui';
import { getPosts, fetchPostsIfNeeded } from '../../../state/modules/blog/posts';
import { fetchTagsIfNeeded } from '../../../state/modules/blog/tags/actions';
import { getTags } from '../../../state/modules/blog/tags/selectors';

import VisiblePostListing from './VisiblePostListing';

type Props = {
  posts: Array<Post>,
  isFetching: boolean,
  listTags: Object,
  layout: string,
  dispatch: Function,
  fetchTagsIfNeeded: () => void,
  changeLayout: () => void,
  handleChangeLayout: () => void,
  fetchPostsIfNeeded: () => void,
};

export class PostListingContainer extends Component {
  static defaultProps: {
    fetchPostsIfNeeded: () => {},
    fetchTagsIfNeeded: () => {},
  };

  componentDidMount() {
    console.log('mounted');
    this.props.fetchPostsIfNeeded();
    this.props.fetchTagsIfNeeded();
  }

  props: Props;
  handleChangeLayout = () => {
    this.props.layout === 'grid'
      ? this.props.dispatch(changeLayout(LAYOUTS.LIST))
      : this.props.dispatch(changeLayout(LAYOUTS.GRID));
  };
  render() {
    return (
      <VisiblePostListing
        posts={ this.props.posts }
        listTags={ this.props.listTags }
        layout={ this.props.layout }
        handleChangeLayout={ this.handleChangeLayout }
        isFetching={ this.props.isFetching }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    listTags: state.entities.tags,
    posts: getPosts(state),
    layout: state.boldr.ui.layout,
    isFetching: state.blog.posts.isFetching,
  };
};

export default connect(mapStateToProps, { fetchTagsIfNeeded,
  fetchPostsIfNeeded })(PostListingContainer);
