import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import classNames from 'classnames/bind';

import { Card, CardActions, CardTitle, CardText } from '../../../../components/md/Cards';
import { FlatButton } from '../../../../components/md/Buttons';
import { getMyProfile } from '../../../Account/state/account';
import Header from '../../../../components/org.MainHeader';
import inlineStyles from '../../../../core/inlineStyles';
import Avatar from '../../../../components/md/Avatars';
import ExpansionList from '../../../../components/md/ExpansionPanels/ExpansionList';
import ExpansionPanel from '../../../../components/md/ExpansionPanels/ExpansionPanel';
import styles from './style.css';

const cx = styles::classNames;

@provideHooks({
  fetch: ({ dispatch }) => dispatch(getMyProfile())
})
class ProfileMain extends Component {
  render() {
    const { columnWidths, focused } = this.props;
    return (
      <div>
      <div style={ inlineStyles.headerOverflow }>
          <Header theme="dark" />
      </div>
      <div className="grid">
      <div className="grid__row">
        <div className={ cx('profile__editor') }>
        <Card>
          <CardTitle
            title={ this.props.users.displayName }
            avatar={ <Avatar src={ this.props.users.avatarUrl } /> }
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
          <CardTitle
            title={ `Editing ${this.props.users.displayName}'s profile ` }
            subtitle="Click the panel for editing options"
            avatar={ <Avatar src={ this.props.users.avatarUrl } /> }
          />
          <CardText>
          <ExpansionList>
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="First name"
            secondaryLabel={ this.props.users.firstName }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Last name"
            secondaryLabel={ this.props.users.lastName }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Display name"
            secondaryLabel={ this.props.users.displayName }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Bio"
            secondaryLabel={ this.props.users.bio }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Location"
            secondaryLabel={ this.props.users.location }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Website"
            secondaryLabel={ this.props.users.website }
          />
          </ExpansionList>
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
