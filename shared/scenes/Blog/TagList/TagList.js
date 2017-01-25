/* @flow */

import React, { Component } from 'react';
import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import { Grid, Col, Row } from '../../../components/Layout';
import { fetchTaggedPost } from '../../../state/modules/blog/tags/actions';
import type { Post } from '../../../types/models';
import PostCard from '../components/PostCard';

type Props = {
  posts: Array<Post>,
  name: string,
  listTags: Object,
};

const TagList = (props: Props) => {
  if (!props.name) {
    return (
      <div>Loading</div>
    );
  }
  return (
      <div>
        <Grid fluid>
          <Row>
          { props.name }
          {
            props.posts.map((post, i) => (
              <Col key={ i } xs={ 12 } md={ 4 }>
                <PostCard key={ i } listTags={ props.listTags } { ...post } />
              </Col>
              )
            )
          }
          </Row>
        </Grid>
      </div>
  );
};

export default TagList;
