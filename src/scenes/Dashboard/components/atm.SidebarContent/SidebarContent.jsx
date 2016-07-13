import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ArticleIcon from 'material-ui/svg-icons/action/description';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import FileManagerIcon from 'material-ui/svg-icons/file/folder-shared';
import PageBuildIcon from 'material-ui/svg-icons/action/build';
import UsersIcon from 'material-ui/svg-icons/social/people';
import CollectionsIcon from 'material-ui/svg-icons/image/collections';
import IconButton from 'material-ui/IconButton';

const styles = {
  sidebar: {
    width: 256,
    minWidth: 256,
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#1b1b25',
    textDecoration: 'none'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#1b1b25'
  },
  content: {
    padding: '16px',
    height: '100%'
  }
};

const SidebarContent = (props) => {
  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ ind } href="#" style={ styles.sidebarLink }>Mock menu item { ind }</a>);
  }

  return (
      <div style={ styles.content }>
        <div style={ styles.divider } />
        <Link style={ styles.sidebarLink } to="/dashboard/articles">
          <IconButton tooltip="Articles">
            <ArticleIcon color="#fff" />
          </IconButton>
        </Link>
        <Link style={ styles.sidebarLink } to="/dashboard/settings">
          <IconButton tooltip="Settings">
            <SettingsIcon color="#fff" />
          </IconButton>
        </Link>
        <Link style={ styles.sidebarLink } to="/dashboard/users">
          <IconButton tooltip="Users">
            <UsersIcon color="#fff" />
          </IconButton>
        </Link>
        <Link style={ styles.sidebarLink } to="/dashboard/media">
          <IconButton tooltip="Media Manager">
            <FileManagerIcon color="#fff" />
          </IconButton>
        </Link>
        <Link style={ styles.sidebarLink } to="/dashboard/pages">
          <IconButton tooltip="Pages">
          <PageBuildIcon color="#fff" />
          </IconButton>
        </Link>
        <Link style={ styles.sidebarLink } to="/dashboard/collections">
          <IconButton tooltip="Collections">
          <CollectionsIcon color="#fff" />
          </IconButton>
        </Link>
      </div>
  );
};

export default SidebarContent;

SidebarContent.propTypes = {
  style: PropTypes.object
};
