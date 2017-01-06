/* @flow */
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import type { ReactElement, ReactChildren } from '../../../types/react';
import PrimaryHeader from '../../../components/PrimaryHeader';
import { logout } from '../../../state/modules/account/actions';
import { selectSetting, getSettings } from '../../../state/modules/boldr/settings';
import { expandNavbar, collapseNavbar } from '../../../state/modules/boldr/ui/actions';

const styled = require('styled-components').default;

type Props = {
  header: ReactElement,
  helmetMeta?: ReactElement,
  hero?: ReactElement,
  children: ReactChildren,
  footer?: ReactElement,
  navigate: Function,
  actions: Object,
  ui: Object,
  menu: Object,
  settings: Object,
  logo: Object,
  auth: Object,
};

type State = {
  collapsed: boolean,
};

const mapStateToProps = (state: Object) => {
  return {
    boldr: state.boldr,
    settings: state.boldr.settings,
    logo: selectSetting(state, 'site_logo'),
    auth: state.account.auth,
    menu: state.boldr.menu.main,
    ui: state.boldr.ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ logout, expandNavbar, collapseNavbar, pushState: push }, dispatch),
    navigate: (url) => dispatch(push(url)),
    dispatch,
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class HeaderWrapper extends Component {
  constructor() {
    super();
    (this: any).handleLogoClick = this.handleLogoClick.bind(this);
    (this: any).handleLogoutClick = this.handleLogoutClick.bind(this);
    (this: any).handleDashClick = this.handleDashClick.bind(this);
    (this: any).handleProfileClick = this.handleProfileClick.bind(this);
    (this: any).handlePrefClick = this.handlePrefClick.bind(this);
    (this: any).onCollapse = this.onCollapse.bind(this);
    (this: any).onExpand = this.onExpand.bind(this);
    (this: any).toggleNavbar = this.toggleNavbar.bind(this);
  }
  state: State;

  handleLogoClick = (e) => {
    this.props.navigate('/');
  }
  handleDashClick = (e) => {
    this.props.navigate('/admin');
  }
  handleProfileClick = (e) => {
    this.props.navigate('/profile');
  }
  handlePrefClick = (e) => {
    this.props.navigate('/account/preferences');
  }
  handleLogoutClick = (e) => {
    this.props.actions.logout();
  }

  props: Props;

  onExpand() {
    this.props.actions.expandNavbar();
  }
  onCollapse() {
    this.props.actions.collapseNavbar();
  }
  toggleNavbar() {
    const isOpen = this.props.ui.navbar;
    isOpen ? this.onCollapse() : this.onExpand();
  }
  render() {
    return (
      <PrimaryHeader
        auth={ this.props.auth }
        logo={ this.props.logo }
        settings={ this.props.settings }
        menu={ this.props.menu }
        navbar={ this.props.ui.navbar }
        toggleNavbar={ this.toggleNavbar }
        handleLogoClick= { this.handleLogoClick }
        handleLogoutClick={ this.handleLogoutClick }
        handlePrefClick={ this.handlePrefClick }
        handleProfileClick={ this.handleProfileClick }
        handleDashClick={ this.handleDashClick }
      />
    );
  }
}
export default HeaderWrapper;
