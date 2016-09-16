import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../Blog/state/post';
import NewArticle from './NewArticle';

class NewArticleContainer extends Component {

  onFormSubmit = (data) => {
    this.props.dispatch(createPost(data));
    this.context.router.push('/');
  }

  render() {
    return <NewArticle onFormSubmit={ this.onFormSubmit } />;
  }
}

NewArticleContainer.contextTypes = {
  router: PropTypes.object
};

NewArticleContainer.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewArticleContainer);
