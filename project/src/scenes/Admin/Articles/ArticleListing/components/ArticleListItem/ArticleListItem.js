/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import Avatar from '@boldr/ui/Avatar';
import { Edit, Trash } from '@boldr/ui/Icons';

import { push } from 'react-router-redux';

import { Menu, MenuItem } from '@boldr/ui/Menu';
import type { ArticleType } from '../../../../../../types/boldr';
import DELETE_ARTICLE_MUTATION from '../../../gql/deleteArticle.mutation.graphql';

export type Props = {
  onArticleClick: ArticleType => mixed,
  deleteArticle: () => void,
  article: ArticleType,
};

const ListItem = styled.li`
  list-style-type: none;
  height: 80px;
  background-color: #fff;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;
const ListHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

@connect()
class ArticleListItem extends React.Component<Props, *> {
  handleArticleClick = () => {
    this.props.onArticleClick(this.props.article);
  };

  handleEditClick = () => {
    this.props.dispatch(push(`/admin/articles/${this.props.article.slug}`));
  };

  handleDeleteClick = () => {
    const { id } = this.props.article;
    this.props.deleteArticle(id);
  };

  render() {
    const { article, deleteArticle } = this.props;

    return (
      <ListItem onClick={this.handleArticleClick}>
        <ListHead>
          <Avatar src={article.image} />
          {article.title}
          <Menu isSize="normal">
            <MenuItem
              icon={<Trash size={20} fill="#222" />}
              onClick={deleteArticle(article.id)}
              text="Delete"
            />
            <MenuItem
              icon={<Edit size={20} fill="#222" />}
              onClick={this.handleEditClick}
              text="Edit"
            />
          </Menu>
        </ListHead>
        <Footer>
          <span>{article.published === true ? 'Published' : 'Draft'}</span>
          <span>{format(article.createdAt, 'MM/DD/YY')}</span>
        </Footer>
      </ListItem>
    );
  }
}
// $FlowIssue
export default graphql(DELETE_ARTICLE_MUTATION, {
  props: ({ mutate }) => ({
    deleteArticle(id) {
      return () =>
        mutate({
          variables: { id },
          optimisticResponse: {
            __typename: 'Mutation',
            deleteArticle: {
              id,
            },
          },
        });
    },
  }),
})(ArticleListItem);
