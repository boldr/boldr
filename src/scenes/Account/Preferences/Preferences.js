import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Menu } from 'stardust';

class Preferences extends Component {
  handleItemClick = (name) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state || {};
    return (
      <div>
        <Helmet
          title="Preferences"
          titleTemplate={ '%s | powered by Boldr' }
        />
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Profile</Menu.Header>

            <Menu.Menu>
              <Menu.Item name="Edit Profile" active={ activeItem === 'Edit Profile' } onClick={this.handleItemClick} />
              <Menu.Item name="View Profile" active={ activeItem === 'View Profile' } onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Settings</Menu.Header>

            <Menu.Menu>
              <Menu.Item name="Change..." active={ activeItem === 'Change...' } onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Preferences);
