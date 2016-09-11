import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SiteLogo, Grid, Col, Row } from 'components';
import NavigationDrawer from '../../components/md/NavigationDrawers';
import { IconButton } from '../../components/md/Buttons';
import FontIcon from '../../components/md/FontIcons';

import {
  articleListClicked, articleEditorClicked, dashboardClicked,
  mediaClicked, membersClicked, settingsClicked, homeClicked
} from './actions';

const DrawerType = {
  FULL_HEIGHT: 'full-height',
  CLIPPED: 'clipped',
  FLOATING: 'floating',
  PERSISTENT: 'persistent',
  PERSISTENT_MINI: 'mini'
};

class Dashboard extends Component {
  static propTypes = {
    children: React.PropTypes.element,
    toggleOpen: React.PropTypes.func,
    articleListClicked: React.PropTypes.func,
    articleEditorClicked: React.PropTypes.func,
    dashboardClicked: React.PropTypes.func,
    mediaClicked: React.PropTypes.func,
    membersClicked: React.PropTypes.func,
    settingsClicked: React.PropTypes.func,
    homeClicked: React.PropTypes.func
  };
  render() {
    const navItems = [
      {
        primaryText: 'Article List',
        leftIcon: <FontIcon>toc</FontIcon>,
        onClick: this.props.articleListClicked
      },
      {
        primaryText: 'Article Editor',
        leftIcon: <FontIcon>edit</FontIcon>,
        onClick: this.props.articleEditorClicked
      }, {
        primaryText: 'Dashboard',
        leftIcon: <FontIcon>dashboard</FontIcon>,
        onClick: this.props.dashboardClicked
      },
      {
        primaryText: 'Media',
        leftIcon: <FontIcon>perm_media</FontIcon>,
        onClick: this.props.mediaClicked
      },
      {
        primaryText: 'Members',
        leftIcon: <FontIcon>people</FontIcon>,
        onClick: this.props.membersClicked
      },
      {
        primaryText: 'Settings',
        leftIcon: <FontIcon>settings</FontIcon>,
        onClick: this.props.settingsClicked
      },
      {
        primaryText: 'Home',
        leftIcon: <FontIcon>home</FontIcon>,
        onClick: this.props.homeClicked
      }
    ];
    return (
      <Grid fluid>
        <Row>
        <NavigationDrawer
          drawerTitle="Navigation"
          toolbarTitle="Dashboard"
          toolbarStyle={ { marginBottom: '25px' } }
          tabletDrawerType={ DrawerType.PERSISTENT_MINI }
          desktopDrawerType={ DrawerType.PERSISTENT_MINI }
          navItems={ navItems }
        />
        <Col xs={ 12 } md={ 10 } mdOffset={ 2 }>
                  { this.props.children }
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    articleListClicked, articleEditorClicked, dashboardClicked,
    mediaClicked, membersClicked, settingsClicked, homeClicked }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
