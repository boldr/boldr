import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import Paper from 'material-ui/Paper';
import classNames from 'classnames/bind';
import { fetchArticlesIfNeeded, selectArticle } from './state/article';
import ArticleListItem from './components/org.ArticleListItem';
import styles from './style.css';

const cx = styles::classNames;
const iconButtonElement = (
  <IconButton
    touch
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={ grey400 } />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={ iconButtonElement }>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Unpublish</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

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
      <div className="row">
       <div className="col-xs-12 col-md-4">
       <Paper>

        <List className={ cx('articleList__wrap') }>
          { this.props.article.articles.map(article =>
            <ListItem
              leftAvatar={ <Avatar src={ article.featureImage } /> }
              rightIconButton={ rightIconMenu }
              primaryText={ article.title }
              secondaryText={
                <ArticleListItem key={ article.id } article={ article } handleArticleClick={ ::this.handleArticleClick } />
              }
              secondaryTextLines={ 2 }
            />)
          }
        </List>
        </Paper>
        </div>
        <div className="col-xs-12 col-md-8">
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
  dispatch: PropTypes.func,
  current: PropTypes.object
};
const mapStateToProps = (state, ownProps) => {
  return {
    article: state.article,
    isLoading: state.article.isLoading,
    current: state.article.current
  };
};
export default connect(mapStateToProps)(Articles);
