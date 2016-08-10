import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { createPost, updatePost } from 'scenes/Blog/state/post';
import NewArticleForm from './ArticleForm';

class ArticleEditor extends Component {

  handleSubmit(values) {
    const postData = {
      title: values.title,
      tags: values.tags,
      status: values.status,
      content: values.content,
      id: this.props.posts.current.id || '',
      origSlug: this.props.params.slug || ''
    };
    if (this.props.posts.isEditing === true) {
      const editId = this.props.posts.current.id;
      this.props.dispatch(updatePost(postData));
    } else {
      this.props.dispatch(createPost(postData));
    }
  }

  render() {
    return (
      <div>
        <NewArticleForm
          initialValues={ this.props.posts.current }
          editing={ this.props.posts.isEditing }
          onSubmit={ ::this.handleSubmit }
        />
      </div>
    );
  }
}

ArticleEditor.propTypes = {
  dispatch: React.PropTypes.func,
  posts: React.PropTypes.object,
  params: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(ArticleEditor);
