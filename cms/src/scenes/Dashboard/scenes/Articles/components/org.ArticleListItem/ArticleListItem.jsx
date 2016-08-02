import React from 'react';
import { List, ListItem } from 'material-ui/List';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';

import styles from './style.css';

const cx = styles::classNames;


const ArticleListItem = props => {
  function handleclick() {
    const articleId = props.article.id;
    const artSlug = props.article.slug;
    props.handleArticleClick(articleId, artSlug);
  }
  return (
     <div className={ cx('article-wrap') }>
       <ul className={ cx('article-list') } onClick={ handleclick }>
         <li className={ cx('article-list__item') }>
           { props.article.createdAt }
         </li>
       </ul>
     </div>
  );
};
ArticleListItem.propTypes = {
  article: React.PropTypes.object.isRequired,
  handleArticleClick: React.PropTypes.func
};

export default ArticleListItem;
