import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { uploadFiles, fetchMedia, deleteMedia } from 'state/dux/media';
import { createPost } from 'state/dux/post';
import EditorForm from '../components/atm.EditorForm';

class NewArticle extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    posts: PropTypes.object,
    params: PropTypes.object,
    currentPost: PropTypes.object,
    onFormSubmit: PropTypes.func,
    uploadFiles: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = { imageUrl: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  handleSubmit(values) {
    const featImg = localStorage.getItem('imgUrl');
    const postData = {
      title: values.title,
      tags: values.tags,
      status: values.status,
      content: values.content,
      feature_image: featImg || values.feature_image
    };
    this.props.dispatch(createPost(postData));
  }

  handleFinish(signResult) {
    const signUrl = signResult.signedUrl;
    const splitUrl = signUrl.split('?');
    const url = splitUrl[0];
    const payload = {
      filename: signResult.filename,
      s3url: url
    };
    localStorage.setItem('imgUrl', JSON.stringify(url));
    this.props.uploadFiles(payload);
  }

  render() {
    return (
      <div>
        <EditorForm
          editing={ false }
          onSubmit={ this.props.onFormSubmit }
          handleFinish={ this.handleFinish }
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
export default connect(mapStateToProps, { createPost, uploadFiles })(NewArticle);
