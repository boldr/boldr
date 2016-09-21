import React from 'react';
import { Entity } from 'draft-js';

const linkStrategy = (contentBlock, callback) => {
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
};

const Link = (props) => {
  const { target, url } = Entity.get(props.entityKey).getData();
  return (
    <a href={ url } target={ target }>
      {props.children}
    </a>
  );
};

Link.propTypes = {
  entityKey: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default {
  strategy: linkStrategy,
  component: Link,
};
