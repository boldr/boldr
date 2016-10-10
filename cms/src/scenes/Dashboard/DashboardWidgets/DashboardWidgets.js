import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import Widget from 'components/Widget';

import { Grid, Col, Row } from '../../../components';
import { loadSiteActivity } from '../Activity/actions';
import ActivityWidget from './components/ActivityWidget';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(loadSiteActivity())
})
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
          <ActivityWidget { ...this.props.activity } />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity
  };
}
export default connect(mapStateToProps, { loadSiteActivity })(DashboardWidgets);
