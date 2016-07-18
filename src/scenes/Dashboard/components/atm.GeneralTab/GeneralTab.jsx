import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import styles from './GeneralTab.css';

const cx = styles::classNames;
const GeneralTab = props => {
  return (
     <div className={ cx('root') }>
      <List>
        <Subheader>The basic information of your webiste.</Subheader>
        <ListItem
          primaryText="Site name"
          secondaryText={ props.settings.siteName }
        />
        <ListItem
          primaryText="Logo"
          leftAvatar={ <Avatar src={ props.settings.logo } /> }
          secondaryText="Your sites logo"
        />
        <ListItem
          primaryText="Favicon"
          leftAvatar={ <Avatar src={ props.settings.favicon } /> }
          secondaryText="The favicon chosen for your website"
        />
        <ListItem
          primaryText="Website URL"
          secondaryText={ props.settings.siteUrl }
        />
        <ListItem
          primaryText="Description of site"
          secondaryText={ props.settings.description }
        />
      </List>

      { props.settings.allowRegistration }
     </div>
  );
};
GeneralTab.propTypes = {
  settings: PropTypes.object
};
export default GeneralTab;
