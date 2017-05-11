/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Loader, FontIcon } from 'boldr-ui';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { gql, graphql } from 'react-apollo';
import { FeaturedArticle, ArticleCard } from '../components';
import { mergeData } from '../../../core/apollo';

type Props = {
  features: Array<Article>,
  articles: Array<Article>,
  layout: Object,
  isFetching: Boolean,
  listTags: Object,
  handleChangeLayout: () => void,
};

const query = gql`
  query {
    articles(offset:0,limit:20) {
      id,
      title,
      slug,
      featureImage
      featured
      published
      createdAt
      excerpt
      tags {
        id,
        name
      },
    }
  }
`;
const CardSpacer = styled.div`
  margin-bottom: 50px;
`;
const FeaturedArea = styled.section`
  padding-top: 50px;
  margin-bottom: 40px;
`;
const style = {
  position: 'fixed',
  right: '20px',
  bottom: '70px',
};

@graphql(query)
class ArticleListing extends React.Component {
  renderArticles = () => {
    const { articles } = this.props.data;
    return articles.map(article => (
      <Col key={article.id} xs={12} md={4}>
        <CardSpacer>
          <ArticleCard article={article} listTags={this.props.listTags} />
        </CardSpacer>
      </Col>
    ));
  };

  render() {
    if (this.props.isFetching) {
      return <Loader />;
    }

    if (this.props.data.loading) {
      return <Loader />;
    }

    return (
      <Grid>
        <FeaturedArea>
          {this.props.features.map(article => (
            <Col key={article.id} xs={12}>
              <FeaturedArticle {...article} listTags={this.props.listTags} />
            </Col>
          ))}
        </FeaturedArea>
        {!this.props.data.loading && this.renderArticles()}
      </Grid>
    );
  }
}
export default ArticleListing;
