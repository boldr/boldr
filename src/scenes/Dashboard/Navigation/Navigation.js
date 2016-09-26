import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Paper from 'components/md/Papers';
import { FloatingButton } from 'components/md/Buttons';
import { List, ListItem } from 'components/md/Lists';
import { Row, Col } from 'components';
import { updateNav } from 'state/dux/navigation';
import NavigationEditor from '../components/mol.NavigationEditor';

function mapStateToProps(state) {
  return { navigation: state.navigation };
}

@connect(mapStateToProps)
class Navigation extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    handleItemClick: PropTypes.func
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
  // @TODO: Shape the form data to match the state then send to api,
  // or create "links table"
  onUpdateFormSubmit = (data) => {
    this.props.dispatch(updateNav(data));
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
                initialValues={ this.state.link }
                onFormSubmit={ this.onUpdateFormSubmit }
              />
            </Paper>
            <FloatingButton primary>add</FloatingButton>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navigation;
