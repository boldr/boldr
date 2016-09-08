import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../Blog/state/post';
import { loadPost, clearCurrentPost, updatePost } from '../../Blog/SinglePost/actions';
import EditorForm from '../components/mol.EditorForm';

class ArticleEditor extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    posts: React.PropTypes.object,
    params: React.PropTypes.object,
    currentPost: React.PropTypes.object,
    clearCurrentPost: React.PropTypes.func,
    loadPost: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      editing: false
    };
  }
  componentDidMount() {
    if (this.props.params.slug) {
      this.props.loadPost(this.props.params.slug);
      this.setState({ // eslint-disable-line
        editing: true
      });
    } else {
      this.props.clearCurrentPost();
    }
  }

  handleSubmit(values) {
    const postData = {
      title: values.title,
      tags: values.tags,
      status: values.status,
      content: values.content,
      id: this.props.currentPost.id || '',
      origSlug: this.props.params.slug || ''
    };
    if (this.state.editing === true) {
      const editId = this.props.currentPost.id;
      this.props.dispatch(updatePost(postData));
    } else {
      this.props.dispatch(createPost(postData));
    }
  }

  render() {
    const isEditing = this.state.editing === 'true';
    if (this.props.currentPost.isLoading && !this.props.currentPost.user.length) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <EditorForm
          initialValues={ this.props.currentPost }
          editing={ isEditing }
          onSubmit={ this.handleSubmit }
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
export default connect(mapStateToProps, { loadPost, clearCurrentPost })(ArticleEditor);
