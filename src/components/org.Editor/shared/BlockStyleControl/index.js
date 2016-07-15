import React from 'react';
import StyleButton from '../StyleButton/index';
import icons from '../icons';

export const BLOCK_TYPES = [
  { type: 'block', label: 'UL', style: 'unordered-list-item', icon: icons.ULIcon },
  { type: 'block', label: 'OL', style: 'ordered-list-item', icon: icons.OLIcon },
  { type: 'block', label: 'H2', style: 'header-two', icon: icons.H2Icon },
  { type: 'block', label: 'QT', style: 'blockquote', icon: icons.BlockQuoteIcon }
];

export const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div>
      { BLOCK_TYPES.map((type) =>
        <StyleButton
          key={ type.label }
          icon={ type.icon }
          active={ type.style === blockType }
          label={ type.label }
          onToggle={ props.onToggle }
          style={ type.style }
        />
      ) }
    </div>
  );
};
