
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

import { createArticle } from 'state/modules/article';
import NewArticleForm from './ArticleForm';

class ArticleEditor extends Component {
  handleSubmit(values) {
    const articleData = {
      title: values.title,
      tags: values.tags,
      status: values.status,
      content: values.content
    };
    this.props.dispatch(createArticle(articleData));
  }
  render() {
    return (
      <div>
        <NewArticleForm onSubmit={ ::this.handleSubmit } />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    article: state.article,
    isLoading: state.article.isLoading
  };
};
export default connect(mapStateToProps)(ArticleEditor);
