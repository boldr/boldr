import React from 'react';
import classNames from 'classnames/bind';
import Link from 'react-router/lib/Link';
import IconButton from 'material-ui/IconButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import AvAirplay from 'material-ui/svg-icons/av/airplay';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import ActionVisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import ActionDone from 'material-ui/svg-icons/action/done';
import ContentFlag from 'material-ui/svg-icons/content/flag';
import NotificationPriorityHigh from 'material-ui/svg-icons/notification/priority-high';
import { inlineStyles } from '../../../../../../core';
import styles from './style.css';

const cx = styles::classNames;

const ArticleListItem = props => {
  function handleclick() {
    const articleId = props.article.id;
    const artSlug = props.article.slug;
    props.handleArticleClick(articleId, artSlug);
  }
  return (
      <TableRow style={ inlineStyles.row }>
        <TableRowColumn colSpan="1" style={ inlineStyles.rowColumn } >
          {props.article.id}
        </TableRowColumn>
        <TableRowColumn colSpan="4" style={ inlineStyles.rowColumn } >
          {props.article.title}
        </TableRowColumn>
        <TableRowColumn colSpan="1" style={ inlineStyles.rowColumn } >
          { props.article.status }
        </TableRowColumn>
        <TableRowColumn colSpan="2" style={ inlineStyles.rowColumn } >
          {props.article.createdAt}
        </TableRowColumn>
        <TableRowColumn colSpan="3" style={ inlineStyles.rowColumn } >
          <Link to={ `/dashboard/articles/${props.id}/preview` }>
            <IconButton disableTouchRipple >
              <AvAirplay />
            </IconButton>
          </Link>
          <Link to={ `/dashboard/articles/editor/${props.slug}` }>
            <IconButton disableTouchRipple >
              <EditorModeEdit />
            </IconButton>
          </Link>
          <IconButton
            name="toggle-button"

            disableTouchRipple
          >
          <ActionVisibilityOff name="in-visible-icon" />
          </IconButton>
        </TableRowColumn>
      </TableRow>
  );
};

ArticleListItem.propTypes = {
  article: React.PropTypes.object.isRequired,
  handleArticleClick: React.PropTypes.func
};

export default ArticleListItem;
