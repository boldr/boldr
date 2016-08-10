import React, { Component, PropTypes } from 'react';
import Widget from '../../components/org.Widget';

class DashboardWidgets extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Widget name="Widget A" />
          </div>
          <div className="col-md-3">
            <Widget name="Widget C" />
          </div>
          <div className="col-md-6">
            <Widget name="Widget D" />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardWidgets;
