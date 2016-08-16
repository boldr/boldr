import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, updatePost } from '../../../../../Blog/state/post';
import { loadPost, clearCurrentPost } from '../../../../../Blog/scenes/SinglePost/actions';
import NewArticleForm from './ArticleForm';

class ArticleEditor extends Component {
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
        <NewArticleForm
          initialValues={ this.props.currentPost }
          editing={ isEditing }
          onSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}

ArticleEditor.propTypes = {
  dispatch: React.PropTypes.func,
  posts: React.PropTypes.object,
  params: React.PropTypes.object,
  currentPost: React.PropTypes.object,
  clearCurrentPost: React.PropTypes.func,
  loadPost: React.PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    currentPost: state.currentPost,
    isLoading: state.currentPost.isLoading
  };
};
export default connect(mapStateToProps, { loadPost, clearCurrentPost })(ArticleEditor);
