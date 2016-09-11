import React, { PropTypes } from 'react';

import {
  DataTable, TableHeader, TableBody, TableRow, TableColumn, EditDialogColumn
} from '../../../../components/md/DataTables';
import MemberTableRow from '../atm.MemberTableRow';

const MembersList = (props) => {
  function handleToggle(userId) {
    props.toggleUser(userId);
  }
  return (
    <DataTable>
    <TableHeader>
       <TableRow>
          <TableColumn>ID</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          props.users.map((user) =>
          <MemberTableRow
            user={ user }
            key={ user.id }
            handleToggle={ handleToggle }
          />
          )
        }

      </TableBody>
    </DataTable>
  );
};

export default MembersList;

MembersList.propTypes = {
  users: React.PropTypes.array,
  toggleUser: React.PropTypes.func
};
