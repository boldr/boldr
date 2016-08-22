import React, { Component, PropTypes } from 'react';
import Widget from '../../components/org.Widget';

class DashboardWidgets extends Component {

  render() {
    return (
      <div>
        <div className="grid__row">
          <div className="grid__quarter">
            <Widget name="Widget A" />
          </div>
          <div className="grid__quarter">
            <Widget name="Widget C" />
          </div>
          <div className="grid__half">
            <Widget name="Widget D" />
          </div>
        </div>
        <div className="grid__row" style={ { marginTop: '1.5em' } }>
        <Widget name="Widget E" />
        </div>
      </div>
    );
  }
}

export default DashboardWidgets;
