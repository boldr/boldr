import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import { Card, CardActions, CardTitle, CardText } from 'components/md/Cards';
import { FlatButton } from 'components/md/Buttons';
import { getMyProfile } from 'state/dux/profile';
import PrimaryHeader from 'components/PrimaryHeader';
import Avatar from 'components/md/Avatars';
import ExpansionList from 'components/md/ExpansionPanels/ExpansionList';
import ExpansionPanel from 'components/md/ExpansionPanels/ExpansionPanel';
import Authenticated from 'components/hoc.Authenticated';

export type Props = {profile?: Object};

@provideHooks({
  fetch: ({ dispatch }) => dispatch(getMyProfile())
})
@Authenticated
class MyProfile extends Component {
  props: Props;
  render() {
    return (
      <div>
          <PrimaryHeader />
      <div className="grid">
      <div className="grid__row">
        <Card className="profile__card">
          <CardTitle
            title={ `Editing ${this.props.profile.private.display_name}'s profile ` }
            subtitle="Click the panel for editing options"
            avatar={ <Avatar src={ this.props.profile.private.avatar_url } /> }
          />
          <CardText>
          <ExpansionList>
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="First name"
            secondaryLabel={ this.props.profile.private.first_name }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Last name"
            secondaryLabel={ this.props.profile.private.last_name }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Display name"
            secondaryLabel={ this.props.profile.private.display_name }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Bio"
            secondaryLabel={ this.props.profile.private.bio }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Location"
            secondaryLabel={ this.props.profile.private.location }
          />
          <ExpansionPanel
            focused
            columnWidths={ 10 }
            label="Website"
            secondaryLabel={ this.props.profile.private.website }
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

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    isLoading: state.profile.isLoading
  };
};

export default connect(mapStateToProps)(MyProfile);
