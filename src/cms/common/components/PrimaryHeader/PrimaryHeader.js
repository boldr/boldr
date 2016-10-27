// @flow

import React, { Component } from 'react';
import { Menu, Dropdown, Button, Container } from 'semantic-ui-react';
import { push } from 'react-router-redux';
import { createSelector } from 'reselect';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { logout } from '../../state/dux/auth';
// import { goHome } from 'state/dux/boldr';
import { getByLabel } from '../../state/dux/boldr/nav';
import { getSettings, isLoaded as isNavigationLoaded } from '../../state/dux/boldr/settings';
import { loadMainNav } from '../../state/dux/boldr/actions';

type Props = {
  navigate: () => void,
  actions: Object,
  navigation: Object,
  settings: Object,
  boldr: Object,
  auth: Object,
  handleDashClick: () => void
};

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];
    // if (!isNavigationLoaded(getState())) {
    promises.push(dispatch(loadMainNav()));
    // }
    return Promise.all(promises);
  }
}])
class PrimaryHeader extends Component {

  state = {
    activeItem: ''
  }
  componentDidMount() {
    this.props.actions.loadMainNav();
  }
  props: Props;

  handleItemClick = (e, { name, href }) => {
    this.setState({
      activeItem: name
    });
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
  /**
   * @method renderUnauthenticated
   * shows the menu with options for unauthenticated users
   */
  renderUnauthenticated() {
    return (
      <Menu.Menu position="right">
       <Menu.Item onClick={ this.handleLoginClick }>
         <Button secondary>Login</Button>
       </Menu.Item>
       <Menu.Item onClick={ this.handleSignupClick }>
         <Button primary>Sign Up</Button>
       </Menu.Item>
      </Menu.Menu>
    );
  }

  /**
   * @method renderAuthenticated
   * shows the menu with options for authenticated users
   */
  renderAuthenticated() {
    return (
      <Menu.Menu position="right">
      <Dropdown as={ Menu.Item } text="Account">
        <Dropdown.Menu>
          <Dropdown.Item onClick={ this.handleProfileClick }>Profile</Dropdown.Item>
          <Dropdown.Item onClick={ this.handlePreferencesClick }>Preferences</Dropdown.Item>
          <Dropdown.Item onClick={ this.handleLogoutClick }>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
       <Menu.Item onClick={ this.handleDashClick }>
         <Button primary>Dashboard</Button>
       </Menu.Item>
      </Menu.Menu>
    );
  }

  render() {
    const { activeItem } = this.state;
    if (!this.props.navigation) {
      return (
        <h1>loading</h1>
      );
    }
    const renderedMenuItems = this.props.navigation.links.map((item, i) =>
      <Menu.Item
        key={ item.id }
        name={ item.name }
        href={ item.href }
        active={ activeItem === item.name }
        onClick={ this.handleItemClick }
      >
        { item.name }
      </Menu.Item>
    );

    return (
      <Menu size="large">
      <Container>
        <Menu.Item>
          <img src={ this.props.settings[2].value }
            alt="logo" onClick={ this.handleLogoClick } role="button" tabIndex="0"
          />
        </Menu.Item>
        { renderedMenuItems }
        { this.props.auth.isAuthenticated ? this.renderAuthenticated() : this.renderUnauthenticated() }
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = (state: Object) => {
  return {
    boldr: state.boldr,
    settings: getSettings(state),
    auth: state.auth,
    navigation: getByLabel(state, 'main')
  };
};

const mapDispatchToProps = (dispatch) => {
  return { // goHome, logout,
    actions: bindActionCreators({ logout, pushState: push, loadMainNav }, dispatch),
    navigate: (url) => dispatch(push(url)),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryHeader);
