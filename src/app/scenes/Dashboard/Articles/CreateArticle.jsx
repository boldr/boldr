import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import * as articleActions from 'app/state/modules/article/article.actions';
import Loader from 'app/components/Loader';
import { changeArticlePublishSetting } from 'app/api/articleEndpoint';

import WrapTransitions from 'app/components/WrapTransitions';
import NewArticleForm from './components/NewArticleForm';

class CreateArticle extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    console.log(values);
    // const boldrEditor = this.refs.boldrEditor;
    // const content = boldrEditor.getContent().toJS();
    // console.log(content); // eslint-disable-line
    this.props.articleActions.createArticle(values);
  }
  render() {
    const { article, loading } = this.props;

    return (
      <div>
      <WrapTransitions animateIn="fadeIn">
      <Paper
          zDepth={3}
          style={{ padding: 40 }}
          className="col-md-offset-3 col-md-6">
          <NewArticleForm onSubmit={this.handleSubmit} />

        </Paper>
          </WrapTransitions>
      </div>
      );
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    article: state.article,
    loading: state.article.loading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    articleActions: bindActionCreators(articleActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);