/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Loader } from 'boldr-ui';
import { gql, graphql } from 'react-apollo';

import { BaseTemplate } from '../../templates';
import Profile from './Profile';

type Props = {
  user: User,
  data: Data,
  match: Object,
};

type Data = {
  userByUsername: User,
  loading: boolean,
};

type State = {
  me: boolean,
};
export class ProfileContainer extends Component {
  constructor() {
    super();

    this.state = {
      me: false,
    };
    (this: any).setMe = this.setMe.bind(this);
  }
  state: State;

  componentDidMount() {
    this.setMe();
  }

  props: Props;

  setMe() {
    const userEmail = this.props.user.email;
    const profEmail = this.props.data.userByUsername.email;
    const isMe = userEmail === profEmail;
    this.setState({
      me: isMe,
    });
  }
  render() {
    const { data } = this.props;

    if (data.loading) {
      return <Loader />;
    }
    return (
      <BaseTemplate
        helmetMeta={
          <Helmet title={`${data.userByUsername.username}'s Profile`} />
        }
      >
        <Profile profile={data.userByUsername} me={this.state.me} />
      </BaseTemplate>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.me,
  };
};

const PROFILE_QUERY = gql`
query user($username: String!) {
    userByUsername(username: $username) {
      id,
      email,
      username,
      firstName,
      lastName,
      avatarUrl,
      profileImage,
      bio,
      location,
      website,
      roles {
        name
      },
      socialMedia {
        facebookUrl,
        githubUrl,
        twitterUrl,
        linkedinUrl,
        googleUrl,
        stackoverflowUrl
      }
    }
}
`;
const ProfileContainerWithData = graphql(PROFILE_QUERY, {
  options: props => ({
    variables: {
      username: props.match.params.username,
    },
  }),
})(ProfileContainer);
export default connect(mapStateToProps)(ProfileContainerWithData);
