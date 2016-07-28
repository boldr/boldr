import React from 'react';
import StyleButton from '../StyleButton/index';
import icons from '../icons';

const style = {
  margin: '5px',
  display: 'inline-block',
  padding: '2px 0',
  cursor: 'pointer',
  color: '#fff'
};

const INLINE_STYLES = [
  { type: 'inline', label: 'B', style: 'BOLD', icon: icons.BoldIcon },
  { type: 'inline', label: 'I', style: 'ITALIC', icon: icons.ItalicIcon },
  { type: 'entity', label: 'Link', style: 'link', icon: icons.LinkIcon }
];


export const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div style={ { userSelect: 'none' } }>
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
      <span style={ style } onMouseDown={ props.onPromptForLink }>
        Add Link
      </span>
      <span style={ style } onMouseDown={ props.onRemoveLink }>
        Remove Link
      </span>
    </div>
  );
};

InlineStyleControls.propTypes = {
  editorState: React.PropTypes.object,
  onRemoveLink: React.PropTypes.func,
  onToggle: React.PropTypes.func,
  onPromptForLink: React.PropTypes.func
};
