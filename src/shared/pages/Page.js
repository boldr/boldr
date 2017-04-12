import React, { Component } from 'react';
import EntryFactory from '../core/EntryFactory';

type Props = {
  entities: Array<Object>,
};

class PageComponent extends Component {
  props: Props;

  renderItems(entities, prefix) {
    return entities.map((ent, index) => {
      const customKey = `${prefix}-part-${index}`;

      return (
        <div data-c-type={ ent.contentTypeId } key={ customKey }>
          {this.renderItem(ent)}
        </div>
      );
    });
  }

  renderItem(ent) {
    return <EntryFactory module={ ent } />;
  }
  render() {
    const { entities } = this.props;

    return (
      <div>
        HELLO PAGE
        {this.renderItems(entities, 'body')}
      </div>
    );
  }
}

export default PageComponent;
