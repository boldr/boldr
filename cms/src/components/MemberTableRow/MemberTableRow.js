import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Card, Image } from 'semantic-ui-react';
import { IconButton } from 'components/md/Buttons';
import FontIcon from 'components/md/FontIcons';
import { TableRow, TableColumn } from 'components/md/DataTables';
import inlineStyles from 'theme/inlineStyles';

const propTypes = {
  user: PropTypes.object,
  handleToggle: PropTypes.func
};

const MemberTableRow = (props) => {
  function handleToggle() {
    props.handleToggle(props.user.id);
  }
  return (
    <Card>
     <Card.Content>
       <Image floated='right' size='mini' src={ props.user.avatar_url } />
       <Card.Header>
           {props.user.display_name}
       </Card.Header>
       <Card.Meta>
         {props.user.id}
       </Card.Meta>
       <Card.Description>
        {props.user.email}   {props.user.role[0].name}
       </Card.Description>
     </Card.Content>
     <Card.Content extra>
       <div className='ui two buttons'>
         <Button basic color='green'  onClick={ handleToggle }>Edit</Button>
       </div>
     </Card.Content>
   </Card>
    );
};

MemberTableRow.propTypes = propTypes;

export default MemberTableRow;
