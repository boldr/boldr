/* @flow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import Sidebar from '../mol.Sidebar/index';
import SidebarContent from '../atm.SidebarContent/index';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  content: {
    marginTop: '80px',
    padding: '16px'
  }
};

type Props = {
  dispatch: Function,
  children: Node
};
class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: false,
      open: false
    };
  }

  componentDidMount() {
    const mql = window.matchMedia(`(min-width: 800px)`); // eslint-disable-line
    mql.addListener(::this.mediaQueryChanged);
    this.setState({
      mql,
      docked: mql.matches
    });// eslint-disable-line
  }

  componentWillUnmount() {
    this.state.mql.removeListener(::this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({
      open
    });
  }
  props: Props;
  mediaQueryChanged() {
    this.setState({
      docked: this.state.mql.matches
    });
  }

  toggleOpen(ev) {
    this.setState({
      open: !this.state.open
    });

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent />;

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: ::this.onSetOpen
    };

    return (
      <div>
        <Sidebar { ...sidebarProps }>
          <div style={ styles.content }>


                <p>
                  {
                    !this.state.docked && <a onClick={ ::this.toggleOpen }
                      href="#" style={ styles.contentHeaderMenuLink }
                    >=</a>
                  }

                </p>

                { this.props.children }

      
          </div>
        </Sidebar>
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

export default connect(mapStateToProps, null)(DashboardLayout);
