import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Button, Checkbox, Icon, Table, Segment } from 'semantic-ui-react';
import { Loader } from 'components/index';
import { fetchSettingsIfNeeded, updateBoldrSettings, getSettings } from 'state/dux/setting';

export type Props = {
  boldr?: Object,
  allSettings: Array<Object>,
  updateBoldrSettings?: Function,
};

class Settings extends Component {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  props: Props;

  handleSubmit(values) {
    const id = this.props.boldr.id;
    this.props.updateBoldrSettings(values, id);
  }
  render() {
    return (

      <Segment>
        <Table compact celled definition>
     <Table.Header>
       <Table.Row>
         <Table.HeaderCell />
         <Table.HeaderCell>Key</Table.HeaderCell>
         <Table.HeaderCell>Value</Table.HeaderCell>
         <Table.HeaderCell>Description</Table.HeaderCell>
         <Table.HeaderCell>Action</Table.HeaderCell>
       </Table.Row>
     </Table.Header>

     <Table.Body>
       { this.props.allSettings.map(setting =>
         <Table.Row key={ setting.id }>
           <Table.Cell collapsing>
             <Checkbox slider />
           </Table.Cell>
           <Table.Cell>{ setting.key }</Table.Cell>
           <Table.Cell>{ setting.value }</Table.Cell>
           <Table.Cell>{ setting.description }</Table.Cell>
         </Table.Row>
       )
     }

     </Table.Body>

     <Table.Footer fullWidth>
       <Table.Row>
         <Table.HeaderCell />
         <Table.HeaderCell colSpan="4">
           <Button floated="right" icon labelPosition="left" primary size="small">
             <Icon name="setting" /> Add Setting
           </Button>
           <Button size="small">Approve</Button>
         </Table.HeaderCell>
       </Table.Row>
     </Table.Footer>
   </Table>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings,
    allSettings: getSettings(state),
    isLoading: state.boldr.isLoading
  };
};
export default connect(mapStateToProps, { updateBoldrSettings })(Settings);
