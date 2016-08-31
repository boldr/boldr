import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Card, CardActions, CardTitle, CardText } from '../../../../components/md/Cards';
import { FlatButton } from '../../../../components/md/Buttons';
import Avatar from '../../../../components/md/Avatars';
import { getPublicProfile } from '../../../Account/state/account';
import Header from '../../../../components/org.MainHeader';
// @provideHooks({
//   fetch: ({ dispatch }) => dispatch(getPublicProfile(this.props.routeParams.id))
// })
class ProfilePublic extends Component {
  componentDidMount() {
    this.props.getPublicProfile(this.props.params.id);
  }
  render() {
    return (
      <div>
      <div style={ {backgroundColor: '#324A70', height: '110px', width: '100%' } }>
          <Header theme="dark" />
      </div>
        <Card>
          <CardTitle
            title="title"
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

ProfilePublic.propTypes = {
  account: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    account: state.account,
    isLoading: state.account.isLoading
  };
};

export default connect(mapStateToProps, { getPublicProfile })(ProfilePublic);
