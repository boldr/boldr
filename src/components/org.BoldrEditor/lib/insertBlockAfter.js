/* @flow */

import { ContentBlock, EditorState, genKey } from 'draft-js';

export default function insertBlockAfter(
  editorState: EditorState,
  blockKey: string,
  newType: string
): EditorState {
  const content = editorState.getCurrentContent();
  const blockMap = content.getBlockMap();
  const block = blockMap.get(blockKey);
  const blocksBefore = blockMap.toSeq().takeUntil((v) => (v === block));
  const blocksAfter = blockMap.toSeq().skipUntil((v) => (v === block)).rest();
  const newBlockKey = genKey();
  const newBlock = new ContentBlock({
    key: newBlockKey,
    type: newType,
    text: '',
    characterList: block.getCharacterList().slice(0, 0),
    depth: 0,
  });
  const newBlockMap = blocksBefore.concat(
    [[blockKey, block], [newBlockKey, newBlock]],
    blocksAfter
  ).toOrderedMap();
  const selection = editorState.getSelection();
  const newContent = content.merge({
    blockMap: newBlockMap,
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: newBlockKey,
      anchorOffset: 0,
      focusKey: newBlockKey,
      focusOffset: 0,
      isBackward: false,
    }),
  });
  return EditorState.push(editorState, newContent, 'split-block');
}
