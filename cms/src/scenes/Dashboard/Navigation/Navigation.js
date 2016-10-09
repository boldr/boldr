import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Paper from 'components/md/Papers';
import Dialog from 'components/md/Dialogs';
import { FloatingButton } from 'components/md/Buttons';
import { List, ListItem } from 'components/md/Lists';
import { Row, Col } from 'components';
import { updateNavLinks, addNavLinks } from 'state/dux/navigation';
import NavigationEditor from './components/NavigationEditor';
import NavigationForm from './components/NavigationForm';

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
      isOpen: false,
      link: {
        name: null,
        position: null,
        href: null,
        id: null,
        icon: null
      }
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  onUpdateFormSubmit = (data) => {
    const id = this.state.link.id;
    this.props.dispatch(updateNavLinks(data, id));
  }

  onFormSubmit = (data) => {
    this.props.dispatch(addNavLinks(data));
  }
  openDialog = () => {
    this.setState({ isOpen: true });
  };

  closeDialog = () => {
    this.setState({ isOpen: false });
  };

  handleItemClick(item) {
    this.setState({
      link: {
        name: item.name,
        position: item.position,
        href: item.href,
        id: item.id,
        icon: item.icon
      }
    });
  }

  render() {
    const { navigation } = this.props;
    const { isOpen } = this.state;
    const listItems = navigation.primary.links.map((item, i) => {
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
          <FloatingButton primary onClick={ this.openDialog }>add</FloatingButton>
          </Col>
          <Col xs={ 12 } md={ 4 }>
            <Paper zDepth={ 2 }>
              <NavigationEditor
                initialValues={ this.state.link }
                onFormSubmit={ this.onUpdateFormSubmit }
              />
            </Paper>
          </Col>
        </Row>
        <Dialog
          isOpen={ isOpen }
          title="Add a link"
          close={ this.closeDialog }
          dialogStyle={ { width: 520 } }
        >
          <NavigationForm onSubmit={ this.onFormSubmit } />
        </Dialog>
      </div>
    );
  }
}

export default Navigation;
