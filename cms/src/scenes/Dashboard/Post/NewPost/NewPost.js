import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { createPost } from 'state/dux/post';
import EditorForm from '../EditorForm';

export type Props = {
  dispatch?: Function,
  posts?: Object,
  params?: Object,
  currentPost?: Object,
  onFormSubmit?: Function,
};

class NewPost extends Component {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
