import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { createPost } from 'state/dux/post';
import EditorForm from '../components/atm.EditorForm';

class NewArticle extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    posts: PropTypes.object,
    params: PropTypes.object,
    currentPost: PropTypes.object,
    onFormSubmit: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
export default connect(mapStateToProps, { createPost })(NewArticle);
