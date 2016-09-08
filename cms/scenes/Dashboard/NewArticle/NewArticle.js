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
    clearCurrentPost: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      editing: false
    };
  }
  componentDidMount() {
    this.props.clearCurrentPost();
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
    this.props.dispatch(createPost(postData));
  }

  render() {
    if (this.props.currentPost.isLoading && !this.props.currentPost.content.length) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <EditorForm
          initialValues={ this.props.currentPost }
          editing={ false }
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
export default connect(mapStateToProps, { clearCurrentPost })(NewArticle);
