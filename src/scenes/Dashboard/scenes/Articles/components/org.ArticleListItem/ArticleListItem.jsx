import React from 'react';
import { List, ListItem } from 'material-ui/List';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import styles from './style.css';

const cx = styles::classNames;

const ArticleListItem = props => {
  return (
     <div className={ cx('article-wrap') }>
       <ul className={ cx('article-list') } onClick={ props.handleClick }>
         <li className={ cx('article-list__item') }>
           { props.article.title }
         </li>
         <li className={ cx('article-list__item') }>
           { props.article.createdAt }
         </li>
         <li className={ cx('article-list__item') }>
          { props.article.excerpt }
         </li>
       </ul>
     </div>
  );
};
ArticleListItem.propTypes = {
  article: React.PropTypes.object.isRequired
};

export default ArticleListItem;
