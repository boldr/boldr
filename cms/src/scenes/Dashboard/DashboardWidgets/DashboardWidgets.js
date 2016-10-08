import React, { Component, PropTypes } from 'react';
import Widget from 'components/Widget';
import { Grid, Col, Row } from '../../../components';

class DashboardWidgets extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col xs={ 6 } md={ 3 }>
            <Widget name="Widget A" />
          </Col>
          <Col xs={ 6 } md={ 3 }>
            <Widget name="Widget C" />
          </Col>
          <Col xs={ 12 } md={ 6 }>
            <Widget name="Widget D" />
          </Col>
        </Row>
        <Row style={ { marginTop: '1.5em' } }>
          <Widget name="Widget E" />
        </Row>
      </div>
    );
  }
}

export default DashboardWidgets;
