/* @flow */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
// Material UI
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AvWeb from 'material-ui/svg-icons/av/web';
import ActionDescription from 'material-ui/svg-icons/action/description';
import SocialPerson from 'material-ui/svg-icons/social/person';
// Boldr
import { logOut } from 'scenes/Account/state/auth';
import SiteLogo from 'components/atm.SiteLogo/index';
// Styles
import inlineStyles, { iconColor } from './inlineStyles';

class TopBar extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickSignout(event, dispatch) {
    this.props.actions.logOut();
  }

  handleClickHome() {
    const path = '/';
    browserHistory.push(path);
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value
    });
  }
  render() {
    return (
      <div className="topbar">
        <div className="topbar__content">
          { /* @TODO Build logic for this on the server */ }
          { /* It should be like /api/v1/boldr/settings */ }
          <AppBar
            title={ <SiteLogo SiteLogoOrTitle="Boldr" /> }
            showMenuIconButton={ false }
            zDepth={ 2 }
            style={ inlineStyles.appbar }
            onTitleTouchTap={ ::this.handleClickHome }
            iconStyleRight={ inlineStyles.elementRight }
            iconElementRight={
              <div>
                <IconMenu
                  iconButtonElement={ <IconButton><SocialPerson color={ iconColor } /></IconButton> }
                >
                  {
                    this.props.auth.isAuthenticated ?
                      <div>
                        <MenuItem value="4"><Link to="/profile">Profile</Link></MenuItem>
                        <MenuItem value="5"><Link to="/account/preferences">Preferences</Link></MenuItem>
                        <MenuItem value="3" onTouchTap={ ::this.handleClickSignout }>Sign Out</MenuItem></div> :
                          <div>
                            <MenuItem value="1"><Link to="/account/login">Login</Link></MenuItem>
                            <MenuItem value="2"><Link to="/account/signup">Signup</Link></MenuItem>
                          </div>
                  }
                </IconMenu>
                <Link to="/blog" >
                  <IconButton>
                    <ActionDescription color={ iconColor } />
                  </IconButton>
                </Link>
                { this.props.auth.role === 'admin' ?
                  <Link to="/dashboard" >
                    <IconButton>
                      <AvWeb color={ iconColor } />
                    </IconButton>
                  </Link> : null
                }
              </div>
            }
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    boldr: state.boldr,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ logOut }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
