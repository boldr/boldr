import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Card, CardActions, CardTitle, CardText } from 'components/md/Cards';
import { FlatButton } from 'components/md/Buttons';
import { getPublicProfile } from 'state/dux/profile';
import PrimaryHeader from 'components/PrimaryHeader';

@provideHooks({
  fetch: ({ dispatch, params: { id } }) => dispatch(getPublicProfile(id))
})
class PublicProfile extends Component {
  render() {
    return (
      <div>
      <div style={ { backgroundColor: '#324A70', height: '110px', width: '100%' } }>
          <PrimaryHeader />
      </div>
        <Card>
          <CardTitle
            title={ this.props.profile.public.display_name }
            subtitle="Subtitle"
            avatar="http://lorempixel.com/100/100/nature/"
          />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>

    </div>
    );
  }
}

PublicProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  getPublicProfile: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    public: state.profile.public,
    isLoading: state.profile.isLoading
  };
};

export default connect(mapStateToProps, { getPublicProfile })(PublicProfile);
