/* @flow */
import React from 'react';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars';
import Divider from 'react-md/lib/Dividers';
import FontIcon from 'react-md/lib/FontIcons';
import Paper from 'react-md/lib/Papers';
import { Heading } from '../../../../components/index';

type Props = {
  activities: Array<Object>
};
const ActivityWidget = (props: Props) => {
  return (
    <div className="boldr-widget__activity">
    <Paper zDepth={ 2 } style={ { padding: '1em' } }>
      <Heading top="5px" align="left" size={ 4 } color="#555">
        <FontIcon style={ { paddingTop: '5px' } }>new_releases</FontIcon> Recent Activity
      </Heading>
    <Divider />
      <List>
      {
        props.activities.map(a =>
          <ListItem key={ a.id }
            leftAvatar={ <Avatar src={ a.owner.avatar_url } role="presentation" /> }
            primaryText={ a.actionType.type }

          />,
        )
      }
      </List>
      </Paper>
    </div>
  );
};

export default ActivityWidget;
