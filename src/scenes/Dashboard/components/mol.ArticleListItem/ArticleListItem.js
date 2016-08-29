import React from 'react';
import classNames from 'classnames/bind';
import Link from 'react-router/lib/Link';
import Moment from 'moment';

import IconButton from 'material-ui/IconButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import AvAirplay from 'material-ui/svg-icons/av/airplay';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import ActionVisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import ActionDone from 'material-ui/svg-icons/action/done';
import ContentFlag from 'material-ui/svg-icons/content/flag';
import NotificationPriorityHigh from 'material-ui/svg-icons/notification/priority-high';

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
  const publishedIcon = <ActionVisibility onClick={ handleclick } />;
  const draftIcon = <ActionVisibilityOff onClick={ handleclick } />;
  return (
      <TableRow>
        <TableColumn>
          {props.article.title}
        </TableColumn>
        <TableColumn>
          { props.article.status === 'published' ?
            publishedIcon :
            draftIcon
          }
        </TableColumn>
        <TableColumn>
          { formattedDate }
        </TableColumn>
        <TableColumn>
          <Link to={ `/dashboard/articles/${props.article.slug}/preview` }>
            <IconButton disableTouchRipple >
              <AvAirplay />
            </IconButton>
          </Link>
          <Link to={ `/dashboard/articles/editor/${props.slug}` }>
            <IconButton disableTouchRipple >
              <EditorModeEdit />
            </IconButton>
          </Link>
          <IconButton name="delete-button" disableTouchRipple>
            <DeleteForever />
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
