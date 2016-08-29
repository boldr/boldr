import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import IconButton from 'material-ui/IconButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import AvAirplay from 'material-ui/svg-icons/av/airplay';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import ActionVisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import ActionDone from 'material-ui/svg-icons/action/done';
import ContentFlag from 'material-ui/svg-icons/content/flag';
import NotificationPriorityHigh from 'material-ui/svg-icons/notification/priority-high';

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
      <TableRow style={ inlineStyles.row }>
        <TableRowColumn colSpan="3" style={ inlineStyles.rowColumn } >
          {props.user.id}
        </TableRowColumn>
        <TableRowColumn colSpan="2" style={ inlineStyles.rowColumn } >
          {props.user.displayName}
        </TableRowColumn>
        <TableRowColumn colSpan="3" style={ inlineStyles.rowColumn } >
          {props.user.email}
        </TableRowColumn>
        <TableRowColumn colSpan="1" style={ inlineStyles.rowColumn } >
          {props.user.roleId}
        </TableRowColumn>
        <TableRowColumn colSpan="3" style={ inlineStyles.rowColumn } >

          <IconButton disableTouchRipple >
            <EditorModeEdit onClick={ handleToggle } />
          </IconButton>

        </TableRowColumn>
      </TableRow>
    );
};

MemberTableRow.propTypes = propTypes;

export default MemberTableRow;
