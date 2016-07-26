import React from 'react';
import StyleButton from '../StyleButton/index';
import icons from '../icons';
// import styles from './styles';


const INLINE_STYLES = [
  { type: 'inline', label: 'B', style: 'BOLD', icon: icons.BoldIcon },
  { type: 'inline', label: 'I', style: 'ITALIC', icon: icons.ItalicIcon },
  { type: 'entity', label: 'Link', style: 'link', icon: icons.LinkIcon }
];


export const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div>
      { INLINE_STYLES.map(type =>
        <StyleButton
          key={ type.label }
          active={ currentStyle.has(type.style) }
          label={ type.label }
          icon={ type.icon }
          onToggle={ props.onToggle }
          style={ type.style }
        />
      ) }
      <span

        onMouseDown={ props.onPromptForLink }
      >
        Add Link
      </span>
      <span
        onMouseDown={ props.onRemoveLink }
      >
        Remove Link
      </span>
    </div>
  );
};
