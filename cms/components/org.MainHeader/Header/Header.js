import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import FontIcon from '../../md/FontIcons';
import { IconButton, RaisedButton, FlatButton } from '../../md/Buttons';
import { ListItem } from '../../md/Lists';
import Menu from '../../md/Menus';

import { goHome } from '../../../scenes/Boldr/state/boldr';
import Head from '../Head';
import Item from '../Item';

import styles from './Header.css';

const cx = styles::classNames;
const kebabMenu = 'more_vert';

const authLinks = (
  <span>
    <Link to="/profile">
      <ListItem primaryText="Profile" />
    </Link>
    <Link to="/account/preferences">
      <ListItem primaryText="Preferences" />
    </Link>
    <ListItem primaryText="Sign out" />
  </span>
);
const unAuthLinks = (
  <span>
    <Link to="/account/login"><ListItem primaryText="Log In" /></Link>
    <Link to="/account/signup"><ListItem primaryText="Sign Up" /></Link>
    </span>
);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarDropdownIsOpen: false,
      mobileState: true,
      authOpen: false
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  setHeightDropdown = () => {
    const height = this.state.mobileState ? `${window.innerHeight - 75}px` : '';
    this.refs.dropdownContent.style.height = height;
  };

  handleClickHome(dispatch) {
    this.props.actions.goHome();
  }

  handleResize = () => {
    const mobileState = window.innerWidth < this.props.breakpoint;
    this.setState({ mobileState }, () => {
      this.addOverflowBody();
      this.setHeightDropdown();
    });
  }

  navbarDropdownHandler = () => {
    this.setState({ navbarDropdownIsOpen: !this.state.navbarDropdownIsOpen }, this.addOverflowBody);
  }

  closeDropdownOnButtonClick = callback => event => {
    const isMobile = this.state.mobileState;
    const isDropdownOpen = this.state.navbarDropdownIsOpen;

    if (callback) callback(event);
    if (isMobile && isDropdownOpen) this.navbarDropdownHandler();
  }

  addOverflowBody() {
    const { navbarDropdownIsOpen, mobileState } = this.state;

    if (navbarDropdownIsOpen && mobileState) {
      document.body.classList.add(cx('overflow'));
    } else {
      document.body.classList.remove(cx('overflow'));
    }
  }

  handleKeyDown = e => {
    // Only enable focusable elements on key tab pressed
    if (e.keyCode !== 9 || this.state.focusable) return;
    this.setState({ focusable: true });
  };

  toggleAuth = () => {
    this.setState({ authOpen: !this.state.authOpen });
  };

  close = () => {
    this.setState({ authOpen: false });
  };

  render() {
    const {
      className,
      children,
      menuItems,
      theme
    } = this.props;
    const { navbarDropdownIsOpen, mobileState, focusable } = this.state;

    const renderAuthMenu = (
      <Menu isOpen={ this.state.authOpen } close={ this.close }
        toggle={ (
            <IconButton className="header__icon"
              tooltipLabel="Account"
              onClick={ this.toggleAuth }
            >
            { kebabMenu }
            </IconButton>
        ) }
      >
      {
        this.props.auth.isAuthenticated ?
        authLinks :
        unAuthLinks
      }
      </Menu>
    );

    return (
      <header
        className={ cx('header', 'theme-dark', className, {
          'is-dropdown-open': navbarDropdownIsOpen,
          focusable
        }) }
        onKeyDown={ this.handleKeyDown }
      >
        <div className={ cx('menu', { 'is-dropdown-open': navbarDropdownIsOpen }) }>
          <div className={ cx('container') }>
            <Head
              toggleDropdownHandler={ this.navbarDropdownHandler }
              dropdownOpen={ navbarDropdownIsOpen }
              logo={ this.props.boldr.logo }
              siteName={ this.props.boldr.siteName }
              closeHeaderDropdown={ this.closeDropdownOnButtonClick() }
            />
            <nav className={ cx('collapse', {
              'is-dropdown-open': navbarDropdownIsOpen
            }) }
              ref="dropdownContent"
            >
              <ul className={ cx('navigation') }>
              {
                this.props.boldr.isLoading ? <h1>Loading</h1> : this.props.boldr.primaryNav.links.map(item =>
                <Item
                  key={ item.position }
                  item={ item }
                  theme={ theme }
                  simpleList={ item.simpleList }
                  closeHeaderDropdown={ this.closeDropdownOnButtonClick() }
                  mobile={ mobileState }
                />
              )
            }
              </ul>
            </nav>
            <div className={ cxN(cx('buttons-group', { 'is-dropdown-open': navbarDropdownIsOpen }), {
              'theme-dark': theme === 'dark'
            }) }>

            <ul style={ { listStyleType: 'none', display: 'flex', alignItems: 'right' } }>
            <li>
             {
               renderAuthMenu
             }
            </li>
              { this.props.auth.user.roleId > 2 ?
                <li>
                  <Link to="/dashboard">
                    <IconButton className="header__icon" style={ { padding: '0' } }>
                    <FontIcon>settings</FontIcon>
                    </IconButton>
                  </Link>
                </li> : null
              }
            </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  menuItems: PropTypes.array,
  theme: PropTypes.oneOf(['light', 'dark']),
  featuredEnable: PropTypes.bool,
  featuredLink: PropTypes.string,
  featuredText: PropTypes.string,
  breakpoint: PropTypes.number,
  auth: PropTypes.object,
  actions: PropTypes.object,
  handleBurger: PropTypes.func,
  boldr: PropTypes.object
};
Header.defaultProps = {
  className: '',
  children: null,
  theme: 'light',
  breakpoint: 992
};

const mapStateToProps = (state) => {
  return {
    boldr: state.boldr,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ goHome }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
