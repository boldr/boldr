import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadSiteActivity, fetchStats } from '../../state/modules/admin/dashboard/actions';

class AdminContainer extends Component {
  static defaultProps: {
    loadSiteActivity: () => {},
    fetchStats: () => {},
  };

  componentDidMount() {
    Promise.all([
      this.props.loadSiteActivity(),
      this.props.fetchStats(),
    ]);
  }
  render() {
    return (
      <div>
        f
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activities: state.admin.dashboard.activities,
    stats: state.admin.dashboard.stats,
    loading: state.admin.dashboard.loading,
  };
}

export default connect(mapStateToProps, { loadSiteActivity,
  fetchStats })(AdminContainer);
