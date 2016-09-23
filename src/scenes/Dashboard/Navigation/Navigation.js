import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Paper from 'components/md/Papers';
import { List, ListItem } from 'components/md/Lists';
import { Row, Col } from 'components';
import NavigationEditor from '../components/mol.NavigationEditor';

function mapStateToProps(state) {
  return { navigation: state.navigation };
}

@connect(mapStateToProps)
class Navigation extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  constructor() {
    super();

    this.state = {
      link: {
        name: null,
        position: null,
        href: null
      }
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(item) {
    this.setState({
      link: {
        name: item.name,
        position: item.position,
        href: item.href
      }
    });
  }
  render() {
    const { navigation } = this.props;

    const listItems = navigation.items.links.map((item, i) => {
      return <ListItem key={ i } primaryText={ item.name } onClick={ () => this.handleItemClick(item) } />;
    });

    return (
      <div>
        <Row>
          <Col xs>
          <Paper zDepth={ 2 }>
          <List subheader="Navigation Links" className="navigation__list">
            { listItems }
            </List>
          </Paper>
          </Col>
          <Col xs>
            <Paper zDepth={ 2 }>
              <NavigationEditor
                name={ this.state.link.name }
                position={ this.state.link.position }
                href={ this.state.link.href }
                initialValues={ this.state.link }
              />
            </Paper>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navigation;
