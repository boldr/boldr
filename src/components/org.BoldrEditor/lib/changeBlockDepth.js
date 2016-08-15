/* @flow */

import { EditorState } from 'draft-js';

export default function changeBlockDepth(
  editorState: EditorState,
  blockKey: string,
  newDepth: number
): EditorState {
  const content = editorState.getCurrentContent();
  const block = content.getBlockForKey(blockKey);
  const depth = block.getDepth();
  if (depth === newDepth) {
    return editorState;
  }
  const newBlock = block.set('depth', newDepth);
  const newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock),
  });
  return EditorState.push(
    editorState,
    newContent,
    'adjust-depth'
  );
}
