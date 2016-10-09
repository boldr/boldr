/* @flow */
import React from 'react';
import Link from 'react-router/lib/Link';
import dateFns from 'date-fns';
import { IconButton } from 'components/md/Buttons';
import FontIcon from 'components/md/FontIcons';
import { TableRow, TableColumn } from 'components/md/DataTables';
// $flowFixMe
const ArticleListItem = props => {
  function handlePublishClick() {
    const postId:String = props.article.id;
    const postStatus = 'draft';
    props.handleArticlePublishClick(postId, postStatus);
  }
  function handleDraftClick() {
    const postId = props.article.id;
    const postStatus = 'published';
    props.handleArticleDraftClick(postId, postStatus);
  }
  const formattedDate = dateFns.format(props.created_at, 'MM/DD/YYYY');
  const publishedIcon = <FontIcon onClick={ handlePublishClick }> visibility</FontIcon>;
  const draftIcon = <FontIcon onClick={ handleDraftClick }>visibility_off</FontIcon>;
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
          { props.created_at }
        </TableColumn>
        <TableColumn>
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
  handleArticlePublishClick: React.PropTypes.func,
  handleArticleDraftClick: React.PropTypes.func,
  slug: React.PropTypes.string
};

export default ArticleListItem;
