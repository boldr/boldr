import React from 'react';
import { Button, Checkbox, Icon, Table, Segment } from 'semantic-ui-react';

type Props = {
  boldr?: Object,
  allSettings: Array<Object>,
  updateBoldrSettings?: Function,
};


const Settings = (props: Props) => {
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
       { props.allSettings.map(setting =>
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
};

export default Settings;
