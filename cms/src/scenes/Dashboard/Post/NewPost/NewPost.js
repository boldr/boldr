/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost } from 'state/dux/post';
import { EditorForm } from '../components';

export type Props = {
  dispatch: Function,
  posts?: Object,
  params?: Object,
  currentPost?: Object,
  onFormSubmit?: Function,
  handleSubmit: Function
};

class NewPost extends Component {
  constructor(props: Props) {
    super(props);
    (this: any).handleSubmit = this.handleSubmit.bind(this);
  }

  props: Props;

  handleSubmit(values) {
    const postData = {
      title: values.title,
      tags: values.tags,
      status: values.status,
      content: values.content
    };
    this.props.dispatch(createPost(postData));
  }

  render() {
    return (
      <div>
        <EditorForm
          editing={ false }
          onSubmit={ this.props.onFormSubmit }
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps, { createPost })(NewPost);
