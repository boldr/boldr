/* @flow */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Col, Row, Widget, Loader, StatsWidget } from 'boldr-ui';
import { fetchActivityIfNeeded, fetchStatsIfNeeded } from '../../../state/modules/admin/dashboard/actions';
import { ActivityWidget } from './components';

type Props = {
  fetchActivityIfNeeded: Function,
  fetchStatsIfNeeded: Function,
  activities: Object,
  loading: boolean,
  stats: Stats,
};

const Dashboard = (props: Props) => {
  if (props.loading) {
    return <Loader />;
  }
  return (
    <Row>
      <Helmet title="Admin Dashboard" />
      <Col xs={ 12 } md={ 8 }>
        <Row>
          <Col xs={ 6 } md={ 6 }>
            <StatsWidget stats={ props.stats } />
          </Col>
          <Col xs={ 6 } md={ 6 }>
            <Widget name="Widget C" />
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 } md={ 12 } style={ { paddingTop: '25px' } }>
            <Widget name="Widget D" />
          </Col>
        </Row>
      </Col>
      <Col xs={ 12 } md={ 4 }>
        {props.activities ? <ActivityWidget activities={ props.activities } /> : null}
      </Col>
    </Row>
  );
};

export default Dashboard;
