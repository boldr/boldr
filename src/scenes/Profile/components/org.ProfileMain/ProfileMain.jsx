import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import { provideHooks } from 'redial';
import { getMyProfile } from 'scenes/Account/state/account';
import classNames from 'classnames/bind';
import styles from './style.css';
import Header from 'components/org.Header';
import inlineStyles from 'core/inlineStyles';

const cx = styles::classNames;

@provideHooks({
  fetch: ({ dispatch }) => dispatch(getMyProfile())
})
class ProfileMain extends Component {
  render() {
    return (
      <div>
      <div style={ inlineStyles.headerOverflow }>
          <Header theme="dark" />
      </div>
      <div className="grid">
      <div className="grid__row">
        <div className={ cx('profile__editor') }>
        <Card>
          <CardHeader
            title={ this.props.users.firstName }
            subtitle="Subtitle"
            avatar={ this.props.users.avatarUrl }
          />
          <CardTitle title="Card" subtitle="Card subtitle" />
          <CardText>
          displayName
          email
          firstName
          lastName
          bio
          gender
          birthday
          location
          website
          picture
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
        </div>
        <Card className={ cx('profile__card') }>
          <CardHeader
            title={ this.props.users.firstName }
            subtitle="Subtitle"
            avatar={ this.props.users.picture }
          />
          <CardTitle title="Card" subtitle="Card subtitle" />
          <CardText>
          <List>
          <ListItem primaryText={ this.props.users.displayName } />
          <ListItem primaryText={ this.props.users.email } />
          <ListItem primaryText={ this.props.users.firstName } />
          <ListItem primaryText={ this.props.users.lastName } />
          <ListItem primaryText={ this.props.users.gender } />
          <ListItem primaryText={ this.props.users.birthday } />
          <ListItem primaryText={ this.props.users.location } />
          <ListItem primaryText={ this.props.users.website } />
          <ListItem primaryText={ this.props.users.avatarUrl } />

          </List>
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
        </div>
    </div>
    </div>
    );
  }
}

ProfileMain.propTypes = {
  users: PropTypes.object.isRequired
};

export default ProfileMain;
