import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { createPost } from 'state/dux/post';
import NewArticle from './NewArticle';

export type Props = {dispatch?: Function};

class NewArticleContainer extends Component {
  props: Props;

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

export default connect()(NewArticleContainer);
