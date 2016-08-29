import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { bindActionCreators } from 'redux';
import { Flex, Box } from 'reflexbox';

import SiteLogo from '../../components/atm.SiteLogo';
import NavigationDrawer from '../../components/md/NavigationDrawers';
import { IconButton } from '../../components/md/Buttons';

import FontIcon from '../../components/md/FontIcons';
import styles from './style.css';
import {
  articleListClicked, articleEditorClicked, dashboardClicked,
  mediaClicked, membersClicked, settingsClicked
} from './actions';


const cx = styles::classNames;

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
    settingsClicked: React.PropTypes.func
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
      }
    ];
    return (
      <div className={ cx('dashboard__row') }>
        <NavigationDrawer
          drawerTitle="Navigation"
          toolbarTitle="Dashboard"
          tabletDrawerType={ DrawerType.PERSISTENT_MINI }
          desktopDrawerType={ DrawerType.PERSISTENT_MINI }
          navItems={ navItems }
        />
        <div className={ cx('dashboard__content') }>
          <Flex p={ 2 } align="center">
                  { this.props.children }
          </Flex>
        </div>
      </div>
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
    mediaClicked, membersClicked, settingsClicked }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
