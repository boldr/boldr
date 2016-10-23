import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Card, Button } from 'semantic-ui-react';
import { getPublicProfile } from 'state/dux/profile';

import PrimaryHeader from 'components/PrimaryHeader';

export type Props = {
  profile?: Object,
  getPublicProfile?: Function,
};

@provideHooks({
  fetch: ({ dispatch, params: { id } }) => dispatch(getPublicProfile(id))
})
class PublicProfile extends Component {
  props: Props;
  render() {
    return (
      <div>
      <div style={ { backgroundColor: '#324A70', height: '110px', width: '100%' } }>
          <PrimaryHeader />
      </div>
        <Card>
          <Card.Content>
          <Card.Header>
            { this.props.profile.public.display_name }
          </Card.Header>

          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </Card.Description>
          <Button>Button</Button>
          </Card.Content>
        </Card>

    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    public: state.profile.public,
    isLoading: state.profile.isLoading
  };
};

export default connect(mapStateToProps, { getPublicProfile })(PublicProfile);
