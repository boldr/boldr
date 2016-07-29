import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import { provideHooks } from 'redial';
import { getMyProfile } from 'scenes/Account/state/account';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = styles::classNames;

@provideHooks({
  fetch: ({ dispatch }) => dispatch(getMyProfile())
})
class ProfileMain extends Component {
  render() {
    return (
      <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12 col-md-4">
        <Card>
          <CardHeader
            title={ this.props.account.firstName }
            subtitle="Subtitle"
            avatar="http://lorempixel.com/100/100/nature/"
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
        <Card className="col-xs-12 col-md-8">
          <CardHeader
            title={ this.props.account.firstName }
            subtitle="Subtitle"
            avatar="http://lorempixel.com/100/100/nature/"
          />
          <CardTitle title="Card" subtitle="Card subtitle" />
          <CardText>
          <List>
          <ListItem primaryText={ this.props.account.displayName } />
          <ListItem primaryText={ this.props.account.email } />
          <ListItem primaryText={ this.props.account.firstName } />
          <ListItem primaryText={ this.props.account.lastName } />
          <ListItem primaryText={ this.props.account.gender } />
          <ListItem primaryText={ this.props.account.birthday } />
          <ListItem primaryText={ this.props.account.location } />
          <ListItem primaryText={ this.props.account.website } />
          <ListItem primaryText={ this.props.account.picture } />

          </List>
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
        </div>
    </div>
    );
  }
}

ProfileMain.propTypes = {
  account: PropTypes.object.isRequired
};

export default ProfileMain;
