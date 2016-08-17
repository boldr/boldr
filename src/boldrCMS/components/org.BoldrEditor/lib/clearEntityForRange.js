/* @flow */
import { CharacterMetadata, EditorState } from 'draft-js';

export default function clearEntityForRange(
  editorState: EditorState,
  blockKey: string,
  startOffset: number,
  endOffset: number
): EditorState {
  const contentState = editorState.getCurrentContent();
  const blockMap = contentState.getBlockMap();
  const block = blockMap.get(blockKey);
  const charList = block.getCharacterList();
  const newCharList = charList.map((char: CharacterMetadata, i) => {
    if (i >= startOffset && i < endOffset) {
      return CharacterMetadata.applyEntity(char, null);
    } else {
      return char;
    }
  });
  const newBlock = block.set('characterList', newCharList);
  const newBlockMap = blockMap.set(blockKey, newBlock);
  const newContentState = contentState.set('blockMap', newBlockMap);
  return EditorState.push(editorState, newContentState, 'apply-entity');
}
