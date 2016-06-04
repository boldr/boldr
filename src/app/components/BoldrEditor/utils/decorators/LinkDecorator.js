import React from 'react';
import { Entity } from 'draft-js';

export const Link = (props) => {
  const { url } = Entity.get(props.entityKey).getData();
  return (
    <a href={ url } style={ { color: 'blue', textDecoration: 'underline' } }>
                    { props.children }
                </a>
    );
};

export const ImplicitLink = (props) => {
  return (
    <a href={ props.decoratedText } style={ { color: 'blue', textDecoration: 'underline' } }>
            { props.children }
        </a>
    );
};

export const getSelectedLink = (editorState, selectionState) => {
  const startKey = selectionState.getStartKey();
  const currentBlock = editorState.getCurrentContent().getBlockForKey(startKey);
  const entityKey = currentBlock.getEntityAt(selectionState.getStartOffset());
  return (entityKey !== null && Entity.get(entityKey).getType() === 'LINK') ? entityKey : null;
};
// 
// Link.propTypes = {
//   entityKey: React.PropTypes.string,
//   children: React.PropTypes.Object
// };
// ImplicitLink.propTypes = {
//   decoratedText: React.PropTypes.Object,
//   children: React.PropTypes.Object
// };
// getSelectedLink.propTypes = {
//
// };