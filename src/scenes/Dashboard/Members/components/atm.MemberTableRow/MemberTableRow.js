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
        <TableColumn tooltipPosition="bottom">
          {props.user.id}
        </TableColumn>
        <TableColumn tooltipPosition="bottom">
          {props.user.displayName}
        </TableColumn>
      <TableColumn tooltipPosition="bottom">
          {props.user.email}
        </TableColumn>
        <TableColumn tooltipPosition="bottom">
          {props.user.roleId}
        </TableColumn>
        <TableColumn tooltipPosition="bottom">
          <IconButton >
            <FontIcon onClick={ handleToggle }>editor</FontIcon>
          </IconButton>
        </TableColumn>
      </TableRow>
    );
};

MemberTableRow.propTypes = propTypes;

export default MemberTableRow;
