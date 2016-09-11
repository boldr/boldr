import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { IconButton } from '../../../../../components/md/Buttons';
import FontIcon from '../../../../../components/md/FontIcons';
import { TableRow, TableColumn } from '../../../../../components/md/DataTables';
import inlineStyles from '../../../../../core/inlineStyles';

const propTypes = {
  user: PropTypes.object,
  handleToggle: PropTypes.func
};

const MemberTableRow = (props) => {
  function handleToggle() {
    props.handleToggle(props.user.id);
  }
  return (
      <TableRow>
        <TableColumn>
          {props.user.id}
        </TableColumn>
        <TableColumn>
          {props.user.display_name}
        </TableColumn>
      <TableColumn>
          {props.user.email}
        </TableColumn>
        <TableColumn>
          {props.user.role[0].name}
        </TableColumn>
        <TableColumn>
          <IconButton >
            <FontIcon onClick={ handleToggle }>editor</FontIcon>
          </IconButton>
        </TableColumn>
      </TableRow>
    );
};

MemberTableRow.propTypes = propTypes;

export default MemberTableRow;
