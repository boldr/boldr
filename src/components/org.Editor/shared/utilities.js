import {
  convertToRaw,
  convertFromRaw,
  EditorState,
  getVisibleSelectionRect } from 'draft-js';

import { decorator } from './Decorator';

export function getBlockStyle(block) {
  switch (block.getType()) {
    case 'header-two':return 'h2';
    case 'header-three':return 'h3';
    case 'header-four':return 'h4';
    case 'blockquote': return 'h2';
    case 'code-block': return 'h2';
    case 'ordered-list-item': return 'li';
    case 'unordered-list-item': return 'li';
    default: return 'text';
  }
}

export function editorStateToJSON(editorState) {
  if (editorState) {
    const content = editorState.getCurrentContent();
    return JSON.stringify(convertToRaw(content), null, 2);
  }
}

export function editorStateFromRaw(rawContent) {
  if (rawContent) {
    const content = convertFromRaw(rawContent);
    return EditorState.createWithContent(content, decorator);
  } else {
    return EditorState.createEmpty(decorator);
  }
}

export function getSelectedBlockElement(range) {
  let node = range.startContainer;
  do {
    const nodeIsDataBlock = node.getAttribute
                            ? node.getAttribute('data-block')
                            : null;
    if (nodeIsDataBlock) {
      return node;
    }
    node = node.parentNode;
  } while (node !== null);
  return null;
}

export function getSelectionCoords(editor, toolbar) {
  const editorBounds = editor.getBoundingClientRect();
  const rangeBounds = getVisibleSelectionRect(window);

  if (!rangeBounds) {
    return null;
  }

  const rangeWidth = rangeBounds.right - rangeBounds.left;

  const toolbarHeight = toolbar.offsetHeight;
  // const rangeHeight = rangeBounds.bottom - rangeBounds.top;
  const offsetLeft = (rangeBounds.left - editorBounds.left)
            + (rangeWidth / 2);
  const offsetTop = rangeBounds.top - editorBounds.top - (toolbarHeight + 14);
  return { offsetLeft, offsetTop };
}
