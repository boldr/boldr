// @flow

import React, { PureComponent } from 'react';
import Link from 'react-router/lib/Link';
import { Menu, Dropdown, Button, Container, Loader } from 'semantic-ui-react';

type Props = {
  navigate: () => void,
  actions: Object,
  navigation: Object,
  settings: Object,
  boldr: Object,
  auth: Object,
  handleItemClick: () => void,
  handleDashClick: () => void,
  handleLoginClick: () => void,
  handleSignupClick: () => void,
  handleProfileClick: () => void,
  handlePreferencesClick: () => void,
  handleLogoClick: () => void,
  handleLogoutClick: () => void,
};

class PrimaryHeader extends PureComponent {
  props: Props;

  /**
   * @method renderUnauthenticated
   * shows the menu with options for unauthenticated users
   */
  renderUnauthenticated() {
    return (
      <Menu.Menu position="right">
       <Menu.Item onClick={ this.props.handleLoginClick }>
         <Button secondary>Login</Button>
       </Menu.Item>
       <Menu.Item onClick={ this.props.handleSignupClick }>
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
        <Menu.Item as={ Dropdown } text="Account">
           <Dropdown.Menu>
             <Dropdown.Item onClick={ this.props.handleProfileClick }>Profile</Dropdown.Item>
             <Dropdown.Item onClick={ this.props.handlePreferencesClick }>Preferences</Dropdown.Item>
             <Dropdown.Item onClick={ this.props.handleLogoutClick }>Logout</Dropdown.Item>
           </Dropdown.Menu>
         </Menu.Item>
       <Menu.Item onClick={ this.props.handleDashClick }>
         <Button primary>Dashboard</Button>
       </Menu.Item>
      </Menu.Menu>
    );
  }

  render() {
    if (!this.props.navigation) {
      return (
        <Loader content="loading" />
      );
    }
    const renderedMenuItems = this.props.navigation.links.map((item, i) =>
      <Menu.Item
        key={ item.id }
        name={ item.name }
        className="ph-menu__item"
      >
        <Link className="ph-menu__item-link" to={ item.href }>{ item.name }</Link>
      </Menu.Item>,
    );

    return (
      <Menu size="large">
      <Container>
        <Menu.Item>
          <img src={ this.props.settings[2].value }
            className="ph-logo"
            alt="logo" onClick={ this.props.handleLogoClick } role="button" tabIndex="0"
          />
        </Menu.Item>
        { renderedMenuItems }
        { this.props.auth.isAuthenticated ? this.renderAuthenticated() : this.renderUnauthenticated() }
        </Container>
      </Menu>
    );
  }
}

export default PrimaryHeader;
