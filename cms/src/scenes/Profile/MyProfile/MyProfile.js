import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import { getMyProfile } from 'state/dux/profile';
import PrimaryHeader from 'components/PrimaryHeader';
import Avatar from 'components/Avatar';
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
      Prof
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
