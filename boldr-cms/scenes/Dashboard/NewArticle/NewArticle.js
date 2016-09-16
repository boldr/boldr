import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../Blog/state/post';
import { clearCurrentPost } from '../../Blog/SinglePost/actions';
import EditorForm from '../components/mol.EditorForm';

class NewArticle extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    posts: React.PropTypes.object,
    params: React.PropTypes.object,
    currentPost: React.PropTypes.object,
    onFormSubmit: React.PropTypes.func
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
    if (this.props.currentPost.isLoading && !this.props.currentPost.content.length) {
      return <p>Loading...</p>;
    }
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


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    currentPost: state.currentPost,
    isLoading: state.currentPost.isLoading
  };
};
export default connect(mapStateToProps, { createPost })(NewArticle);
