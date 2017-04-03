/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import styled from 'styled-components';
import { Grid, Col, Row } from 'boldr-ui';

import { updateMedia, updateDrawerType } from '../../../state/modules/boldr/ui/actions';
import navItems from './buildAdminNav';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  box-sizing: border-box;
  padding-left: 5em;
  padding-right: 5em;
  max-width: 2000px;
  background-color: #e5eaed;
`;
const UserSection = styled.div`
  display: inline-flex;
  flex-direction: row;
  vertical-align: middle;
  justify-content: center;
`;
const UserName = styled.div`
  padding-top: 10px;
  margin-left: 15px;
  margin-right: 50px;
  font-weight: 700;
`;
type Props = {
  children: ReactElement,
  dashboard: ?Object,
  me: Object,
  location: Object,
  ui: Object,
  onMediaTypeChange: Function,
};

class DashboardLayout extends PureComponent {
  constructor(props: Props) {
    super();
    this.state = {
      visible: true,
      position: 'left',
      minOffset: 256,
    };

    (this: any)._setContainer = this._setContainer.bind(this);
    (this: any)._calcMinHeight = this._calcMinHeight.bind(this);
    (this: any)._closeDrawer = this._closeDrawer.bind(this);
    (this: any)._handleToggle = this._handleToggle.bind(this);
    (this: any)._handleMediaTypeChange = this._handleMediaTypeChange.bind(this);
  }
  props: Props;

  _handleToggle(visible) {
    this.setState({ visible });
  }

  _closeDrawer() {
    this.setState({ visible: false });
  }
  _setContainer(container) {
    this._container = findDOMNode(container);
    this._calcMinHeight();
  }

  _calcMinHeight() {
    if (!this._container) {
      return;
    }

    const { offsetHeight: toolbarHeight } = this._container.querySelector('.boldr-adminbar');
    this.setState({ minOffset: toolbarHeight });
  }
  _handleMediaTypeChange(drawerType, media) {
    this._calcMinHeight();
    this.props.onMediaTypeChange(drawerType, media);
  }

  render() {
    const { location: { pathname, search } } = this.props;
    const toolbarActionItems = (
      <UserSection>
        <Avatar src={ this.props.me.avatarUrl } role="presentation" />
        <UserName>
          <Link to={ `/profiles/${this.props.me.username}` } style={ { color: '#fff' } }>
            {this.props.me.firstName}
          </Link>
        </UserName>
      </UserSection>
    );

    return (
      <NavigationDrawer
        ref={ this._setContainer }
        drawerTitle="Boldr"
        drawerClassName="boldr-drawer__admin"
        toolbarClassName="boldr-adminbar"
        desktopMinWidth={ 900 }
        onMediaTypeChange={ this._handleMediaTypeChange }
        defaultMedia={ this.props.ui.defaultMedia }
        navItems={ navItems(pathname) }
        drawerType={ NavigationDrawer.DrawerTypes.PERSISTENT_MINI }
        toolbarActions={ toolbarActionItems }
      >
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </NavigationDrawer>
    );
  }
}

function mapStateToProps(state) {
  return {
    router: state.router,
    dashboard: state.admin.dashboard,
    boldr: state.boldr,
    me: state.users.me,
    ui: state.boldr.ui,
  };
}

export default connect(mapStateToProps, { onMediaTypeChange: updateMedia })(DashboardLayout);
