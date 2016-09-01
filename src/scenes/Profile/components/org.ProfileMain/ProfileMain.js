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
  static propTypes = {
    account: PropTypes.object.isRequired
  };
  render() {
    return (
      <div>
      <div style={ inlineStyles.headerOverflow }>
          <Header theme="dark" />
      </div>
      <div className="grid">
      <div className="grid__row">
        <Card className={ cx('profile__card') }>
          <CardTitle
            title={ `Editing ${this.props.account.displayName}'s profile ` }
            subtitle="Click the panel for editing options"
            avatar={ <Avatar src={ this.props.account.avatarUrl } /> }
          />
          <CardText>
          <ExpansionList>
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="First name"
            secondaryLabel={ this.props.account.firstName }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Last name"
            secondaryLabel={ this.props.account.lastName }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Display name"
            secondaryLabel={ this.props.account.displayName }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Bio"
            secondaryLabel={ this.props.account.bio }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Location"
            secondaryLabel={ this.props.account.location }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Website"
            secondaryLabel={ this.props.account.website }
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

export default ProfileMain;
