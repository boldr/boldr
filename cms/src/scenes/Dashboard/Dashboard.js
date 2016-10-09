import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SiteLogo, Grid, Col, Row } from 'components';
import Authenicated from 'components/hoc.Authenticated';
import NavigationDrawer from 'components/md/NavigationDrawers';
import FontIcon from 'components/md/FontIcons';

import {
  articleListClicked, articleEditorClicked, dashboardClicked,
  mediaClicked, membersClicked, settingsClicked, homeClicked,
  navigationClicked, contentClicked, pagesClicked
} from './actions';

const DrawerType = {
  FULL_HEIGHT: 'full-height',
  CLIPPED: 'clipped',
  FLOATING: 'floating',
  PERSISTENT: 'persistent',
  PERSISTENT_MINI: 'mini'
};

@Authenicated
class Dashboard extends Component {
  static propTypes = {
    children: PropTypes.element,
    toggleOpen: PropTypes.func,
    articleListClicked: PropTypes.func,
    articleEditorClicked: PropTypes.func,
    dashboardClicked: PropTypes.func,
    mediaClicked: PropTypes.func,
    membersClicked: PropTypes.func,
    settingsClicked: PropTypes.func,
    homeClicked: PropTypes.func,
    navigationClicked: PropTypes.func,
    pagesClicked: PropTypes.func,
    contentClicked: PropTypes.func
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
        primaryText: 'Navigation',
        leftIcon: <FontIcon>link</FontIcon>,
        onClick: this.props.navigationClicked
      },
      {
        primaryText: 'Pages',
        leftIcon: <FontIcon>book</FontIcon>,
        onClick: this.props.pagesClicked
      },
      {
        primaryText: 'Content',
        leftIcon: <FontIcon>content_copy</FontIcon>,
        onClick: this.props.contentClicked
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
          <Col xs style={ { paddingTop: '6%' } }>
            <div>
            { this.props.children }
            </div>
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
    mediaClicked, membersClicked, settingsClicked, homeClicked, navigationClicked,
    contentClicked, pagesClicked }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
