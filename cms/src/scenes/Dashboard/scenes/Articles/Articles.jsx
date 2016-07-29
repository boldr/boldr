import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { List, ListItem } from 'material-ui/List';
import classNames from 'classnames/bind';
import { fetchArticlesIfNeeded, selectArticle } from './state/article';
import ArticleListItem from './components/org.ArticleListItem';
import styles from './style.css';

const cx = styles::classNames;

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchArticlesIfNeeded())
})
class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleArticleClick(articleId) {
    this.props.dispatch(selectArticle(articleId));
    this.setState({
      visible: true
    });
  }
  render() {
    if (!this.props.article.articles.length) {
      return <h1>Perhaps you should create a new post?</h1>;
    }
    return (
       <div className={ cx('articleList') }>
        <List className={ cx('articleList__wrap') }>
          { this.props.article.articles.map(article =>
            <ArticleListItem key={ article.id } article={ article } handleArticleClick={ ::this.handleArticleClick } />)
          }
        </List>
        <div className={ cx('articleList__preview') }>
          {
            this.state.visible ? <span>{ this.props.current.title }</span> : null
          }
        </div>
       </div>
    );
  }
}

Articles.propTypes = {
  children: PropTypes.node,
  article: PropTypes.object,
  dispatch: PropTypes.func
};
const mapStateToProps = (state, ownProps) => {
  return {
    article: state.article,
    isLoading: state.article.isLoading,
    current: state.article.current
  };
};
export default connect(mapStateToProps)(Articles);
