/* @flow */
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import { logout, loadMainNav, getByLabel, getSettings, isNavLoaded } from 'state/index';
import { PrimaryHeader } from 'components/index';
// $FlowIssue
import './style.scss';

type Props = {
  header: ReactElement,
  helmetMeta?: ReactElement,
  hero?: ReactElement,
  children: ReactChildren,
  footer?: ReactElement,
  navigate: Function,
  actions: Object,
  navigation: Object,
  settings: Object,
  auth: Object
};
const mapStateToProps = (state: Object) => {
  return {
    boldr: state.boldr,
    settings: getSettings(state),
    auth: state.auth,
    navigation: getByLabel(state, 'main')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ logout, pushState: push, loadMainNav }, dispatch),
    navigate: (url) => dispatch(push(url)),
    dispatch
  };
};

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];
    if (!isNavLoaded(getState())) {
      promises.push(dispatch(loadMainNav()));
    }
    return Promise.all(promises);
  }
}])
@connect(mapStateToProps, mapDispatchToProps)
class HeaderWrapper extends Component {
  constructor() {
    super();
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handlePreferencesClick = this.handlePreferencesClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleDashClick = this.handleDashClick.bind(this);
  }
  componentDidMount() {
    this.props.actions.loadMainNav();
  }
  handleItemClick = (e, { name, href }) => {
    this.props.navigate(`${href}`);
  }

  handleLoginClick = (e) => {
    this.props.navigate('/account/login');
  }

  handleSignupClick = (e) => {
    this.props.navigate('/account/signup');
  }

  handleProfileClick = (e) => {
    this.props.navigate('/profile');
  }
  handlePreferencesClick = (e) => {
    this.props.navigate('/account/preferences');
  }
  handleLogoClick = (e) => {
    this.props.navigate('/');
  }

  handleLogoutClick = (e) => {
    this.props.actions.logout();
  }

  handleDashClick = (e) => {
    this.props.navigate('/dashboard');
  }
  props: Props;
  render() {
    const renderDefaultHeader = (

<PrimaryHeader
  auth={ this.props.auth }
  settings={ this.props.settings }
  navigation={ this.props.navigation }
  handleItemClick={ this.handleItemClick }
  handleLoginClick={ this.handleLoginClick }
  handleSignupClick={ this.handleSignupClick }
  handleProfileClick={ this.handleProfileClick }
  handlePreferencesClick={ this.handlePreferencesClick }
  handleLogoClick= { this.handleLogoClick }
  handleLogoutClick={ this.handleLogoutClick }
  handleDashClick={ this.handleDashClick }
/>);

    return (
    <header className="boldr__theme-header">
      { this.props.header || renderDefaultHeader }
    </header>
    );
  }
}
export default HeaderWrapper;
