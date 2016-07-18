import { provideHooks } from 'redial';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchArticlesIfNeeded, loadArticles, FETCH_ARTICLES_REQUEST } from 'state/modules/article';
import BlogPost from './components/org.BlogPost';
@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchArticlesIfNeeded())
})
class Blog extends Component {
  constructor(props) {
    super(props);
    this.createArticleCollection = (articleCollection) => this._createArticleCollection(articleCollection);
  }

  _createArticleCollection(articleList) {
    const articleCollection = [];
    for (let article of articleList) { // eslint-disable-line
      articleCollection.push(
        <div key={ article.id }>
          <BlogPost { ...article } />
        </div>
      );
    }
    return articleCollection;
  }
  render() {
    let articleCollection = this.createArticleCollection(this.props.article.articleList);
    return (
      <div>
        Blog
        {
          this.props.article.isLoading ? <h1>Loading ...</h1> :
        articleCollection }
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


export default connect(mapStateToProps)(Blog);
