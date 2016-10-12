/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPost, clearCurrentPost, updatePost } from 'scenes/Blog/SinglePost/actions';
import EditorForm from '../EditorForm';

export type Props = {
  dispatch: Function,
  posts: Object,
  params: Object,
  currentPost: Object,
  clearCurrentPost?: Function,
  loadPost: Function
};

class PostEditor extends Component {
  constructor(props: Props) {
    super(props);
    (this:any).handleSubmit = this.handleSubmit.bind(this);
  }
  state:Object = {
    editing: true
  };
//  componentDidMount() {
//    this.props.loadPost(this.props.params.slug);
//  }
  props: Props;
  handleSubmit(values) {
    const postData = {
      title: values.title,
      tags: values.tags,
      status: values.status,
      content: values.content,
      id: this.props.currentPost.id || '',
      origSlug: this.props.params.slug || ''
    };
    this.props.dispatch(updatePost(postData));
  }

  render() {
    if (!this.props.currentPost.content.length) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <EditorForm
          initialValues={ this.props.currentPost }
          onSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    currentPost: state.posts.bySlug[ownProps.params.slug],
    isLoading: state.currentPost.isLoading
  };
};
export default connect(mapStateToProps, { loadPost, clearCurrentPost, updatePost })(PostEditor);
