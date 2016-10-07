import React, { PropTypes } from 'react';
import StyleButton from '../StyleButton/StyleButton';
import { BLOCK_CONTROLS, BLOCK_TYPES } from '../helpers';

const BlockStyleControls = ({ controls, display, editorState, onToggle }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="DraftJSEditor-controls" style={ { display } }>
      {
        BLOCK_TYPES.map(type => {
          if (controls.indexOf(type.label) !== -1) {
            return (
              <StyleButton
                key={ type.label }
                active={ type.style === blockType }
                label={ type.label }
                icon={ type.icon }
                onToggle={ onToggle }
                style={ type.style }
              />
            );
          }
        }
      )
    }
    </div>
  );
};

BlockStyleControls.propTypes = {
  editorState: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  controls: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.arrayOf(BLOCK_CONTROLS),
  ]),
  display: React.PropTypes.oneOf(['block', 'inline'])
};

export default BlockStyleControls;
