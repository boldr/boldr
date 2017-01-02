/* @flow */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Link from 'react-router/lib/Link';
import SettingsIcon from 'material-ui/svg-icons/action/settings-applications';
import LinkIcon from 'material-ui/svg-icons/editor/insert-link';
import PageIcon from 'material-ui/svg-icons/communication/import-contacts';
import BlockIcon from 'material-ui/svg-icons/device/dvr';
import CloudIcon from 'material-ui/svg-icons/file/cloud-upload';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import ContentIcon from 'material-ui/svg-icons/content/content-copy';
import ListIcon from 'material-ui/svg-icons/action/list';
import { Card, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

type Props = {
  open: Boolean,
  user: Object,
};

const Sidebar = (props: Props) => {
  return (
    <Drawer open={ props.open } width={ 200 }>

      <Card style={ { backgroundColor: '#01579b' } }>
        <CardHeader
          avatar={
            <Avatar
              size={ 50 }
              src={ props.user.avatarUrl }
              style={ { border: '1px solid grey', margin: '-5px' } }
            />
          }
        />
        <span style={ { color: '#fff' } }>{ props.user.displayName }</span>
      </Card>
      <Link to="/">
        <MenuItem leftIcon={ <HomeIcon /> }>Home</MenuItem>
      </Link>
      <Link to="/admin">
        <MenuItem leftIcon={ <DashboardIcon /> }>Dashboard</MenuItem>
      </Link>
      <Link to="/admin/members">
        <MenuItem leftIcon={ <PeopleIcon /> }>Members</MenuItem>
      </Link>
      <Link to="/admin/posts">
        <MenuItem leftIcon={ <ListIcon /> }>Post Listing</MenuItem>
      </Link>
      <Link to="/admin/posts/new">
        <MenuItem leftIcon={ <ContentIcon /> }>New Post</MenuItem>
      </Link>
      <Link to="/admin/filemanager">
        <MenuItem leftIcon={ <CloudIcon /> }>File Manager</MenuItem>
      </Link>

      <Link to="/admin/navigation">
        <MenuItem leftIcon={ <LinkIcon /> }>Navigation</MenuItem>
      </Link>

      <Link to="/admin/settings">
        <MenuItem leftIcon={ <SettingsIcon /> }>Settings</MenuItem>
      </Link>
    </Drawer>
  );
};

export default Sidebar;

/*
<Link to="/admin/blocks">
  <MenuItem leftIcon={ <BlockIcon /> }>Blocks</MenuItem>
</Link>
<Link to="/admin/pages">
  <MenuItem leftIcon={ <PageIcon /> }>Pages</MenuItem>
</Link>
 */
