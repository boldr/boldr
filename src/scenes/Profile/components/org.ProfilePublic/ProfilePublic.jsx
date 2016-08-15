import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { provideHooks } from 'redial';
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
          <CardHeader
            title="title"
            subtitle="Subtitle"
            avatar="http://lorempixel.com/100/100/nature/"
          />
          <CardTitle title="Card" subtitle="Card subtitle" />
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

const mapStateToProps = (state, ownProps) => {
  return {
    account: state.account,
    isLoading: state.account.isLoading
  };
};

export default connect(mapStateToProps, { getPublicProfile })(ProfilePublic);
