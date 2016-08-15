/* @flow */

import { EditorState } from 'draft-js';

export default function changeBlockType(
  editorState: EditorState,
  blockKey: string,
  newType: string
): EditorState {
  const content = editorState.getCurrentContent();
  const block = content.getBlockForKey(blockKey);
  const type = block.getType();
  if (type === newType) {
    return editorState;
  }
  const newBlock = block.set('type', newType);
  const newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock),
  });
  return EditorState.push(
    editorState,
    newContent,
    'change-block-type'
  );
}
