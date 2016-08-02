
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { createArticle, uploadFeatureImage, updateArticle } from 'scenes/Dashboard/scenes/Articles/state';
import NewArticleForm from './ArticleForm';

class ArticleEditor extends Component {

  handleSubmit(values) {
    const articleData = {
      title: values.title,
      tags: values.tags,
      status: values.status,
      content: values.content,
      id: this.props.article.current.id || '',
      origSlug: this.props.params.slug || ''
    };
    if (this.props.article.isEditing === true) {
      const editId = this.props.article.current.id;
      this.props.dispatch(updateArticle(articleData));
    } else {
      this.props.dispatch(createArticle(articleData));
    }
  }

  render() {
    return (
      <div>
        <NewArticleForm initialValues={ this.props.article.current } editing={ this.props.article.isEditing } onSubmit={ ::this.handleSubmit } />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    article: state.article
  };
};
export default connect(mapStateToProps)(ArticleEditor);

ArticleEditor.propTypes = {
  dispatch: React.PropTypes.func,
  article: React.PropTypes.object
};
