import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import UserTableRow from '../atm.UserTableRow';

const UsersList = (props) => {
  function handleToggle(userId) {
    props.toggleUser(userId);
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Role</TableHeaderColumn>
          <TableHeaderColumn>Actions</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>

        {
          props.users.map((user) =>
          <UserTableRow
            user={ user }
            key={ user.id }
            handleToggle={ handleToggle }
          />
          )
        }

      </TableBody>
    </Table>
  );
};

export default UsersList;

UsersList.propTypes = {
  users: React.PropTypes.array,
  toggleUser: React.PropTypes.func
};
