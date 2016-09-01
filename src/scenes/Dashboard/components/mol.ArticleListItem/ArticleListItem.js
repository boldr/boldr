import React from 'react';
import classNames from 'classnames/bind';
import Link from 'react-router/lib/Link';
import Moment from 'moment';

import { IconButton } from '../../../../components/md/Buttons';
import FontIcon from '../../../../components/md/FontIcons';
import { TableRow, TableColumn } from '../../../../components/md/DataTables';
import { inlineStyles } from '../../../../core';
import styles from './style.css';

const cx = styles::classNames;

const ArticleListItem = props => {
  function handleclick() {
    const articleId = props.article.id;
    props.handleArticleClick(articleId);
  }
  const formattedDate = Moment(props.article.createdAt).format('MM D YYYY');
  const publishedIcon = <FontIcon onClick={ handleclick }> visibility</FontIcon>;
  const draftIcon = <FontIcon onClick={ handleclick }>visibility_off</FontIcon>;
  return (
      <TableRow>
        <TableColumn tooltipPosition="bottom">
          {props.article.title}
        </TableColumn>
        <TableColumn tooltipPosition="bottom">
          { props.article.status === 'published' ?
            publishedIcon :
            draftIcon
          }
        </TableColumn>
        <TableColumn tooltipPosition="bottom">
          { formattedDate }
        </TableColumn>
        <TableColumn tooltipPosition="bottom">
          <Link to={ `/dashboard/articles/${props.article.slug}/preview` }>
            <IconButton >
              <FontIcon>airplay</FontIcon>
            </IconButton>
          </Link>
          <Link to={ `/dashboard/articles/editor/${props.slug}` }>
            <IconButton >
              <FontIcon>edit</FontIcon>
            </IconButton>
          </Link>
          <IconButton name="delete-button">
            <FontIcon>delete_forever</FontIcon>
          </IconButton>
        </TableColumn>
      </TableRow>
  );
};

ArticleListItem.propTypes = {
  article: React.PropTypes.object.isRequired,
  handleArticleClick: React.PropTypes.func,
  slug: React.PropTypes.string
};

export default ArticleListItem;
