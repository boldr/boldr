/* @flow */
import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const UsersList = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Role</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>

        {
          props.users.map((user) =>
            <TableRow key={ user.id }>
              <TableRowColumn>{ user.id }</TableRowColumn>
              <TableRowColumn>{ user.profile.name }</TableRowColumn>
              <TableRowColumn>{ user.email }</TableRowColumn>
              <TableRowColumn>{ user.profile.role }</TableRowColumn>
            </TableRow>
          )
        }

      </TableBody>
    </Table>
  );
};

export default UsersList;

UsersList.propTypes = {
  users: React.PropTypes.array

};
