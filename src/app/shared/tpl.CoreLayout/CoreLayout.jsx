import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppDrawer from 'components/AppDrawer';
import * as boldrActions from 'state/boldr/boldr.actions';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import Loader from 'shared/atm.Loader';
import { checkTokenValidity } from 'state/auth/auth.actions';

import meta from 'app/utils.rendering/meta';
import BoldrTheme from 'app/utils.rendering/theme';
import 'app/styles/app.scss';

const muiTheme = getMuiTheme(BoldrTheme);
class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.dispatch(checkTokenValidity);
  }

  handleToggle() { // eslint-disable-line
    this.props.dispatch(boldrActions.toggleSideBar());
  }

  render() {
    return (
          <MuiThemeProvider muiTheme={ muiTheme }>
          <div>
           <Helmet {...meta.app.head} />
            <TopBar handleToggle={ ::this.handleToggle } />
            <AppDrawer />
            <div className="wrap container-flud">
            { this.props.children }
            </div>
            <Footer />
        </div>
        </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr
  };
}

export default connect(mapStateToProps, null)(CoreLayout);