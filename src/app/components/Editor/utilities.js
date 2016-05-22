import React from 'react';
import { Entity } from 'draft-js';
import styles from './Editor.scss';
import { Media } from './atomicBlocks/media';
export const articleTypes = {
  OVERVIEW: 'overview',
  FULL: 'full',
  EDIT: 'edit'
};
export const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  },
  STRIKETHROUGH: {
    textDecoration: 'line-through'
  },
  LINK: {
    color: '#8bc34a'
  },
  DESCRIPTION: {
    color: '#999'
  }
};

export function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return styles.blockquote;
    default:
      return null;
  }
}

export const BLOCK_TYPES = [
  {
    label: 'H1',
    style: 'header-one'
  },
  {
    label: 'H2',
    style: 'header-two'
  },
  {
    label: 'H3',
    style: 'header-three'
  },
  {
    label: 'H4',
    style: 'header-four'
  },
  {
    label: 'H5',
    style: 'header-five'
  },
  {
    label: 'H6',
    style: 'header-six'
  },
  {
    label: 'Blockquote',
    style: 'blockquote'
  },
  {
    label: 'UL',
    style: 'unordered-list-item'
  },
  {
    label: 'OL',
    style: 'ordered-list-item'
  },
  {
    label: 'Code Block',
    style: 'code-block'
  }
];

export const INLINE_STYLES = [
  {
    label: 'Bold',
    style: 'BOLD'
  },
  {
    label: 'Italic',
    style: 'ITALIC'
  },
  {
    label: 'Underline',
    style: 'UNDERLINE'
  },
  {
    label: 'Monospace',
    style: 'CODE'
  }
];

export function getMediaBlockObject(block) {
  switch (block.getType()) {
    case 'atomic':
      return {
        component: Media,
        editable: false
      };
    default:
      return null;
  }
}

export const articleStyle = {
  fontWeight: 300,
  lineHeight: '2rem'
};
export function findLinkEntities(contentBlock, callback) {
  console.log(callback);
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        Entity.get(entityKey).getType() === 'LINK'
      );
    },
    callback
  );
}

export const Link = (props) => {
  const {url} = Entity.get(props.entityKey).getData();

  return (
    <a href={url} className={styles.link}>
      {props.children}
    </a>
    );
};
