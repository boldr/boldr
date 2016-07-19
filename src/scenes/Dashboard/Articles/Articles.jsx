import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import { fetchArticlesIfNeeded } from 'state/modules/article';
import ArticleListItem from '../components/org.ArticleListItem';
import styles from './Articles.css';

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
  handleArticleClick() {
    this.setState({ visible: true });
  }
  render() {
    if (!this.props.article.articles.length) {
      return <h1>Perhaps you should create a new post?</h1>;
    }
    return (
       <div className={ cx('articleList') }>
        <List className={ cx('articleList__wrap') }>
          { this.props.article.articles.map(article =>
            <ArticleListItem key={ article.id } article={ article } handleClick={ ::this.handleArticleClick } />)
          }
        </List>
        <div className={ cx('articleList__preview') }>

        </div>
       </div>
    );
  }
}

Articles.propTypes = {
  children: PropTypes.node,
  article: PropTypes.object
};
const mapStateToProps = (state, ownProps) => {
  return {
    article: state.article,
    isLoading: state.article.isLoading
  };
};
export default connect(mapStateToProps)(Articles);
