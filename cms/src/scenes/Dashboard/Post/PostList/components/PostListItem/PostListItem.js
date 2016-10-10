/* @flow */
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import dateFns from 'date-fns';
import { Image, Item, Icon, Segment, Divider } from 'semantic-ui-react';

type Props = {
  article: Object,
  handleArticlePublishClick: Function,
  handleArticleDraftClick: Function,
  created_at: string,
  slug: string
};

const PostListItem = (props: Props) => {
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
  const publishedIcon = <Icon onClick={ handlePublishClick } name="unhide" size="large" />;
  const draftIcon = <Icon onClick={ handleDraftClick } name="hide" size="large" />;
  return (
    <div>
    <Segment>
      <Item>
       <Item.Image size="tiny" src={ props.article.feature_image }
         style={ { width: '100px', height: '100px', float: 'left', marginRight: '15px' } }
       />
       <Item.Content>
        <Item.Header>
          <Link to={ `/dashboard/posts/editor/${props.slug}` }>
          {props.article.title}
          </Link>
        </Item.Header>
        <Item.Meta>
            <Icon name="calendar" /> { formattedDate }
        </Item.Meta>
        <Item.Description>
        { props.article.excerpt }
        </Item.Description>
        <Item.Extra>
        { props.article.status === 'published' ?
          publishedIcon :
          draftIcon
        }
          <Link to={ `/dashboard/posts/editor/${props.slug}` }>
            <Icon name="edit" size="large" />
          </Link>
          <Icon name="recycle" size="large" />
        </Item.Extra>
      </Item.Content>
    </Item>
    </Segment>
    <Divider />
    </div>
  );
};

export default PostListItem;
