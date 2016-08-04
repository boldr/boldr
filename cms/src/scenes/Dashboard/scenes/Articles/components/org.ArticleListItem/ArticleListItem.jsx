import React from 'react';
import classNames from 'classnames/bind';
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
