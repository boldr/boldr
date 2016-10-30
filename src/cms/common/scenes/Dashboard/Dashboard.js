/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Authenticated } from '../../components';
import { Icon } from 'semantic-ui-react';
import { Sidebar, Titlebar, SidebarContent } from './components/Sidebar';
import { showSidebar, hideSidebar } from './reducer';

export type Props = {
  children: React$Element<*>,
  toggleOpen?: Function,
  showSidebar?: Function,
  hideSidebar?: Function,
  dashboard: ?Object
};

@Authenticated
class Dashboard extends PureComponent {
  constructor() {
    super();
    this.state = {
      docked: false,
      open: true,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    };
    (this: any).menuButtonClick = this.menuButtonClick.bind(this);
    (this: any).onSetOpen = this.onSetOpen.bind(this);
    (this: any).onSetClose = this.onSetClose.bind(this);
  }
  props: Props;
  onSetOpen(open) {
    this.props.showSidebar();
  }
  onSetClose(open) {
    this.props.hideSidebar();
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    const isOpen = this.props.dashboard.open;
    isOpen ? this.onSetClose(this.state.open) : this.onSetOpen(this.state.open);
  }
  render() {
    const sidebar = <SidebarContent handleLogoClick={ this.onLogoClick } />;

    const sidebarProps = {
      sidebar,
      docked: this.props.dashboard.docked,
      sidebarClassName: 'dashboard__sidebar',
      open: this.props.dashboard.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen
    };

    return (
      <Grid fluid>
        <Sidebar { ...sidebarProps }>
          <Titlebar title="Boldr" icon={
            <Icon name="menu" onClick={ this.menuButtonClick } />
          }>
            <Col xs style={ { paddingTop: '6%' } }>
              <div>
              { this.props.children }
              </div>
            </Col>
          </Titlebar>
        </Sidebar>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    router: state.router,
    dashboard: state.dashboard,
    boldr: state.boldr
  };
}

export default connect(mapStateToProps, { showSidebar, hideSidebar })(Dashboard);
