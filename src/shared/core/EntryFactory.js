/* @flow */
import React, { Component } from 'react';
import contentTypes from './factory';

type Props = {
  module: Object,
};
export default class EntryFactory extends Component {
  props: Props;
  render() {
    const { module } = this.props;
    if (!module) {
      return null;
    }

    const knownContentType = contentTypes[module.contentTypeId];
    const ContentType = knownContentType ? contentTypes[module.contentTypeId]() : contentTypes.default();

    const entities = module.entities ? this.renderItems(module.entities) : null;

    return renderContentType(ContentType, module, entities);
  }

  renderItems(entities) {
    return entities.map((ent, index) => {
      return <EntryFactory module={ ent } key={ index } />;
    });
  }
}

function renderContentType(ContentType, module, entities) {
  return (
    <div>
      <ContentType entities={ module.entities } { ...module.content }>
        {entities}
      </ContentType>
    </div>
  );
}
