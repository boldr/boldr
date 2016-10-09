// @flow

import React, { Component, PropTypes } from 'react';
import { Menu, Dropdown, Button, Container } from 'semantic-ui-react';
import { push } from 'react-router-redux';
import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goHome } from 'state/dux/boldr';
import { logout } from 'state/dux/auth';
import { loadPrimary } from 'state/dux/navigation';

type Props = {
  navigate: () => void,
  actions: Object,
  navigation: Object,
  boldr: Object,
  auth: Object,
  handleDashClick: () => void
};

@provideHooks({
  fetch: ({ dispatch }) => dispatch(loadPrimary())
})
class PrimaryHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  props: Props;
  componentDidMount() {
    this.props.actions.loadPrimary();
  }
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
    // $FlowFixMe
    const { activeItem } = this.state;
    if (!this.props.navigation.primary) {
      return (
        <h1>loading</h1>
      );
    }

    const renderedMenuItems = this.props.navigation.primary.links.map((item, i) =>
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
          <img src={ this.props.boldr.siteLogo } alt="logo" onClick={ this.handleLogoClick } />
        </Menu.Item>
        { renderedMenuItems }
        { this.props.auth.isAuthenticated ? this.renderAuthenticated() : this.renderUnauthenticated() }
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = (state:Object) => {
  return {
    boldr: state.boldr,
    auth: state.auth,
    navigation: state.navigation,
    loading: state.navigation.loaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ goHome, logout, loadPrimary }, dispatch),
    navigate: (url) => dispatch(push(url)),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryHeader);
