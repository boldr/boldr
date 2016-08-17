/* @flow */

import { BLOCK_TYPE } from 'draft-js-utils';

import type { ContentBlock } from 'draft-js';


export default function isListItem(block: ContentBlock): boolean {
  const blockType = block.getType();
  return (
    blockType === BLOCK_TYPE.UNORDERED_LIST_ITEM ||
    blockType === BLOCK_TYPE.ORDERED_LIST_ITEM
  );
}
