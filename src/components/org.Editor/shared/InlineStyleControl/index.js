import React from 'react';
import StyleButton from '../StyleButton/index';
// import styles from './styles';


const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' }
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
