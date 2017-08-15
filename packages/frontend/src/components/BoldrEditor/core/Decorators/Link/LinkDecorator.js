/* @flow */
import React, { Component } from 'react';
import Icon from '@boldr/ui/Icons/Icon';
// $FlowIssue
import type { ContentBlock, ContentState } from 'draft-js';
import { ENTITY_TYPE } from '../../constants';

export type Props = {
  children?: ReactChildren,
  entityKey: string,
  contentState: ContentState,
};

function findLinkEntities(
  contentBlock: ContentBlock,
  callback: Function,
  contentState: ?ContentState,
) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    if (entityKey !== null) {
      const entity = contentState ? contentState.getEntity(entityKey) : null;
      return entity !== null && entity.getType() === ENTITY_TYPE.LINK;
    }
    return false;
  }, callback);
}

function getLinkComponent(config) {
  const { showOpenOptionOnHover } = config;
  return class Link extends Component {
    state: Object = {
      showPopOver: false,
    };
    props: Props;
    openLink: Function = () => {
      const { entityKey, contentState } = this.props;
      const { url } = contentState.getEntity(entityKey).getData();
      const linkTab = window.open(url, 'blank'); // eslint-disable-line no-undef
      linkTab.focus();
    };

    toggleShowPopOver: Function = () => {
      const showPopOver = !this.state.showPopOver;
      this.setState({
        showPopOver,
      });
    };

    render() {
      const { children, entityKey, contentState } = this.props;
      const { url, targetOption } = contentState.getEntity(entityKey).getData();
      const { showPopOver } = this.state;
      return (
        <span
          className="boldredit-link__dec--wrapper"
          onMouseEnter={this.toggleShowPopOver}
          onMouseLeave={this.toggleShowPopOver}
        >
          <a href={url} target={targetOption}>
            {children}
          </a>
          {showPopOver && showOpenOptionOnHover
            ? <Icon
                kind="external-link"
                onClick={this.openLink}
                color="#222"
                className="boldredit-link__dec--icon"
              />
            : undefined}
        </span>
      );
    }
  };
}

export default (config: Object) => {
  return {
    strategy: findLinkEntities,
    component: getLinkComponent(config),
  };
};
