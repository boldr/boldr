import React, { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import { spacing, typography, zIndex } from 'material-ui/styles';
import { cyan500 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import ArticleIcon from 'material-ui/svg-icons/action/description';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import MediaIcon from 'material-ui/svg-icons/action/perm-media';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ListingIcon from 'material-ui/svg-icons/action/toc';
import UsersIcon from 'material-ui/svg-icons/social/people';
import EditorIcon from 'material-ui/svg-icons/editor/mode-edit';
import { midnightBlue } from 'core/materialTheme';
import inlineStyles from 'core/inlineStyles';
import SiteLogo from 'components/atm.SiteLogo';
import Sidebar from './components/mol.Sidebar/index';
import SidebarContent from './components/atm.SidebarContent/index';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = styles::classNames;

const inStyles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: midnightBlue,
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8
  },
  content: {
    marginTop: '80px',
    padding: '16px'
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: true,
      open: true
    };
  }


  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
      <AppBar
        style={ inlineStyles.dashboardAppBar }
      />
      <div className={ cx('dashboard__row') }>
      <Drawer open={ this.state.open } docked width="200px" containerStyle={ { zIndex: zIndex.drawer - 100 } }>
        <div style={ inStyles.logo } onTouchTap={ this.handleTouchTapHeader }>
          <Link to="/"><SiteLogo logoHeight="35px" /></Link>
        </div>
        <MenuItem primaryText="Articles"
          insetChildren
          leftIcon={ <ArticleIcon /> }
          menuItems={ [
            <MenuItem
              leftIcon={ <ListingIcon /> }
              containerElement={ <Link to="/dashboard/articles" /> }
              primaryText="Listing"
            />,
            <MenuItem
              leftIcon={ <EditorIcon /> }
              primaryText="Editor"
              containerElement={ <Link to="/dashboard/articles/editor" /> }
            />
          ] }
        />
        <MenuItem
          primaryText="Dashboard"
          leftIcon={ <DashboardIcon /> }
          containerElement={ <Link to="/dashboard" /> }
        />
        <MenuItem
          primaryText="Media"
          leftIcon={ <MediaIcon /> }
          containerElement={ <Link to="/dashboard/media" /> }
        />
        <MenuItem
          primaryText="Settings"
          leftIcon={ <SettingsIcon /> }
          containerElement={ <Link to="/dashboard/settings" /> }
        />
        <MenuItem
          primaryText="Users"
          leftIcon={ <UsersIcon /> }
          containerElement={ <Link to="/dashboard/users" /> }
        />
      </Drawer>

      <div className={ cx('dashboard__content') }>
                { this.props.children }

                </div>
          </div>
      </div>
      );
  }
}

Dashboard.propTypes = {
  children: React.PropTypes.element,
  toggleOpen: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr
  };
}

export default connect(mapStateToProps, null)(Dashboard);
