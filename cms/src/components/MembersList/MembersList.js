import React, { PropTypes } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import {
  DataTable, TableHeader, TableBody, TableRow, TableColumn,
} from 'components/md/DataTables';
import MemberTableRow from '../MemberTableRow';

const MembersList = (props) => {
  function handleToggle(userId) {
    props.toggleUser(userId);
  }
  return (
      <Card.Group>
        {
          props.users.map((user) =>
          <MemberTableRow
            user={ user }
            key={ user.id }
            handleToggle={ handleToggle }
          />
          )
        }
      </Card.Group>

  );
};

export default MembersList;

MembersList.propTypes = {
  users: React.PropTypes.array,
  toggleUser: React.PropTypes.func
};
