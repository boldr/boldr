import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Col, Row, Container } from 'components/index';

class ProfileMain extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="4">
            <Card>
              <CardHeader
                title={ this.props.currentUser.name }
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
          </Col>
          <Col xs="8">
            <Card>
              <CardHeader
                title={ this.props.currentUser.name }
                subtitle="Subtitle"
                avatar="http://lorempixel.com/100/100/nature/"
              />
              <CardTitle title="Card title" subtitle="Card subtitle" />
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
          </Col>

        </Row>
      </Container>
    );
  }
}

export default ProfileMain;
