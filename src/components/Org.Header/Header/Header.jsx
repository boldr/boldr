import React, { Component, PropTypes } from 'react';
// import FlatButton from 'material-ui/FlatButton';
import classNames from 'classnames/bind';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Burger from 'material-ui/svg-icons/navigation/menu';
import cxN from 'classnames';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AvWeb from 'material-ui/svg-icons/av/web';
import ActionDescription from 'material-ui/svg-icons/action/description';
import SocialPerson from 'material-ui/svg-icons/social/person';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { goHome } from '../../../scenes/Boldr/state/boldr';
import Head from '../Head';
import Item from '../Item';

import defaultMenuItems from '../data/menu-items.json';
import styles from './Header.css';

const cx = styles::classNames;

class Header extends Component {

  state = {
    navbarDropdownIsOpen: false,
    mobileState: true
  };

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
  }

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
  }

  renderButton(link, onClick, text, className) {
    return !!link
      ? <a href={ link } className={ className } onClick={ onClick }>{ text }</a>
      : <RaisedButton className={ className } onClick={ onClick } >{ text }</RaisedButton>;
  }



  render() {
    const {
      className,
      children,
      menuItems,
      theme
    } = this.props;
    const { navbarDropdownIsOpen, mobileState, focusable } = this.state;

    const renderedMenuItems = menuItems.map(item =>
      <Item
        key={ item.position + item.id }
        item={ item }
        theme={ theme }
        simpleList={ item.simpleList }
        closeHeaderDropdown={ this.closeDropdownOnButtonClick() }
        mobile={ mobileState }
      />
    );

    return (
      <header
        className={ cx('header', [`theme-${theme}`], className, {
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
              theme={ theme }
              closeHeaderDropdown={ this.closeDropdownOnButtonClick() }
            />
            <nav className={ cx('collapse', {
              'is-dropdown-open': navbarDropdownIsOpen
            }) }
              ref="dropdownContent"
            >
              <ul className={ cx('navigation') }>{ !!children ? children : renderedMenuItems }


              </ul>
            </nav>
            <div className={ cxN(cx('buttons-group', { 'is-dropdown-open': navbarDropdownIsOpen }), {
                'theme-dark': theme === 'dark'
              }) }
            >

            <ul style={ { listStyleType: 'none', display: 'flex', margin: '0' } }>
            <li>
            <IconMenu
              iconButtonElement={ <IconButton style={ { padding: '0' } }><SocialPerson color="white" /></IconButton> }
              anchorOrigin={ { horizontal: 'left', vertical: 'top' } }
              targetOrigin={ { horizontal: 'left', vertical: 'top' } }
            >
            {
              this.props.auth.isAuthenticated ?
              <div>
              <MenuItem primaryText="Profile" containerElement={ <Link to="/profile" /> } />
              <MenuItem primaryText="Preferences" containerElement={ <Link to="/account/preferences" /> } />
              <MenuItem primaryText="Sign out" />
              </div>
              :
              <div>
              <MenuItem primaryText="Log In" containerElement={ <Link to="/account/login" /> } />
              <MenuItem primaryText="Sign Up" containerElement={ <Link to="/account/signup" /> } /></div>
            }

            </IconMenu>

            </li>
              { this.props.auth.roleId > 4 ?
                <li>
                  <Link to="/dashboard">
                    <IconButton style={ { padding: '0' } }>
                      <AvWeb color="white" />
                    </IconButton>
                  </Link>
                </li> : null
              }
            </ul>
            </div>
            <div style={ { paddingTop: '1em' } }>

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
  handleBurger: PropTypes.func
};
Header.defaultProps = {
  className: '',
  children: null,
  menuItems: defaultMenuItems,
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
