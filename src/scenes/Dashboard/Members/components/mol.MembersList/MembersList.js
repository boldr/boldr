import React, { PropTypes } from 'react';

import {
  DataTable, TableHeader, TableBody, TableRow, TableColumn, EditDialogColumn
} from '../../../../../components/md/DataTables';
import MemberTableRow from '../atm.MemberTableRow';

const MembersList = (props) => {
  function handleToggle(userId) {
    props.toggleUser(userId);
  }
  return (
    <DataTable>
    <TableHeader>
       <TableRow>
          <TableColumn tooltipPosition="bottom">ID</TableColumn>
          <TableColumn tooltipPosition="bottom">Name</TableColumn>
          <TableColumn tooltipPosition="bottom">Email</TableColumn>
          <TableColumn tooltipPosition="bottom">Role</TableColumn>
          <TableColumn tooltipPosition="bottom">Actions</TableColumn>
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
