/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Modal } from 'semantic-ui-react';

import { FloatingButton } from 'components/Buttons';
import { List, ListItem } from 'components/Lists';
import { Row, Col } from 'components/index';
import { updateNavLinks, addNavLinks } from 'state/dux/navigation';
import NavigationEditor from './components/NavigationEditor';
import NavigationForm from './components/NavigationForm';

function mapStateToProps(state) {
  return { navigation: state.navigation };
}

export type Props = {
  navigation: Object,
  dispatch?: Function,
  handleItemClick?: Function,
};

@connect(mapStateToProps, { updateNavLinks, addNavLinks })
class Navigation extends Component {
  constructor() {
    super();
    (this: any).handleItemClick = this.handleItemClick.bind(this);

  }
  state: Object = {
    open: false,
    link: {
      name: null,
      position: null,
      href: null,
      id: null,
      icon: null
    }
  };
  onUpdateFormSubmit = (data) => {
    this.props.updateNavLinks(data);
  }

  onFormSubmit = (data) => {
    this.props.addNavLinks(data);
  }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  props: Props;

  handleItemClick(item: Object) {
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
    const { open } = this.state;
    const listItems = navigation.primary.links.map((item, i) => {
      return <ListItem key={ i } primaryText={ item.name } onClick={ () => this.handleItemClick(item) } />;
    });

    return (
      <div>
        <Row>
          <Col xs>
          <Segment>
          <List subheader="Navigation Links" className="navigation__list">
            { listItems }
            </List>
          </Segment>
          <FloatingButton primary onClick={ this.open }>add</FloatingButton>
          </Col>
          <Col xs={ 12 } md={ 4 }>
            <Segment>
              <NavigationEditor
                initialValues={ this.state.link }
                onFormSubmit={ this.onUpdateFormSubmit }
              />
            </Segment>
          </Col>
        </Row>
        <Modal
          open={ open }
          onOpen={ this.open }
          onClose={ this.close }
        >
           <Modal.Header>Add a link</Modal.Header>
           <Modal.Content>
          <NavigationForm onSubmit={ this.onFormSubmit } />
           </Modal.Content>
         </Modal>

      </div>
    );
  }
}

export default Navigation;
