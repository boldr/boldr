/* @flow */
import { EventEmitter } from 'events';
import React, { Component } from 'react';
import autobind from 'class-autobind';
import { CompositeDecorator, Editor, EditorState, Modifier, RichUtils } from 'draft-js';
import getDefaultKeyBinding from 'draft-js/lib/getDefaultKeyBinding';
import isSoftNewlineEvent from 'draft-js/lib/isSoftNewlineEvent';
import cx from 'classnames';

import { BLOCK_TYPE } from 'draft-js-utils';
// import type { ContentBlock } from 'draft-js';

import changeBlockDepth from './lib/changeBlockDepth';
import changeBlockType from './lib/changeBlockType';
import insertBlockAfter from './lib/insertBlockAfter';
import isListItem from './lib/isListItem';

import EditorToolbar from './lib/EditorToolbar';
import EditorValue from './lib/EditorValue';
import LinkDecorator from './lib/LinkDecorator';


// $FlowIssue - Flow doesn't understand CSS Modules
import './Draft.global.css';
// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './BoldrEditor.css';

const MAX_LIST_DEPTH = 2;

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: '#f3f3f3',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

type ChangeHandler = (value: EditorValue) => any;

type Props = {
  className?: string;
  toolbarClassName?: string;
  editorClassName?: string;
  value: EditorValue;
  onChange?: ChangeHandler;
  placeholder?: string;
  customStyleMap?: {[style: string]: {[key: string]: any}};
};

export default class BoldrEditor extends Component {
  constructor() {
    super(...arguments);
    this._keyEmitter = new EventEmitter();
    autobind(this);
  }
  _keyEmitter: EventEmitter;
  props: Props;

  _shouldHidePlaceholder(): boolean {
    const editorState = this.props.value.getEditorState();
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        return true;
      }
    }
    return false;
  }

  _handleReturn(event: Object): boolean {
    if (this._handleReturnSoftNewline(event)) {
      return true;
    }
    if (this._handleReturnEmptyListItem()) {
      return true;
    }
    if (this._handleReturnSpecialBlock()) {
      return true;
    }
    return false;
  }

  // `shift + return` should insert a soft newline.
  _handleReturnSoftNewline(event: Object): boolean {
    const editorState = this.props.value.getEditorState();
    if (isSoftNewlineEvent(event)) {
      const selection = editorState.getSelection();
      if (selection.isCollapsed()) {
        this._onChange(RichUtils.insertSoftNewline(editorState));
      } else {
        const content = editorState.getCurrentContent();
        let newContent = Modifier.removeRange(content, selection, 'forward');
        const newSelection = newContent.getSelectionAfter();
        const block = newContent.getBlockForKey(newSelection.getStartKey());
        newContent = Modifier.insertText(
          newContent,
          newSelection,
          '\n',
          block.getInlineStyleAt(newSelection.getStartOffset()),
          null
        );
        this._onChange(
          EditorState.push(editorState, newContent, 'insert-fragment')
        );
      }
      return true;
    }
    return false;
  }

  // If the cursor is in an empty list item when return is pressed, then the
  // block type should change to normal (end the list).
  _handleReturnEmptyListItem(): boolean {
    const editorState = this.props.value.getEditorState();
    const selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const blockKey = selection.getStartKey();
      const block = contentState.getBlockForKey(blockKey);
      if (isListItem(block) && block.getLength() === 0) {
        const depth = block.getDepth();
        const newState = (depth === 0) ?
          changeBlockType(editorState, blockKey, BLOCK_TYPE.UNSTYLED) :
          changeBlockDepth(editorState, blockKey, depth - 1);
        this._onChange(newState);
        return true;
      }
    }
    return false;
  }

  // If the cursor is at the end of a special block (any block type other than
  // normal or list item) when return is pressed, new block should be normal.
  _handleReturnSpecialBlock(): boolean {
    const editorState = this.props.value.getEditorState();
    const selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const blockKey = selection.getStartKey();
      const block = contentState.getBlockForKey(blockKey);
      if (!isListItem(block) && block.getType() !== BLOCK_TYPE.UNSTYLED) {
        // If cursor is at end.
        if (block.getLength() === selection.getStartOffset()) {
          const newEditorState = insertBlockAfter(
            editorState,
            blockKey,
            BLOCK_TYPE.UNSTYLED
          );
          this._onChange(newEditorState);
          return true;
        }
      }
    }
    return false;
  }

  _onTab(event: Object): ?string {
    const editorState = this.props.value.getEditorState();
    const newEditorState = RichUtils.onTab(event, editorState, MAX_LIST_DEPTH);
    if (newEditorState !== editorState) {
      this._onChange(newEditorState);
    }
  }

  _customKeyHandler(event: Object): ?string {
    // Allow toolbar to catch key combinations.
    const eventFlags = {};
    this._keyEmitter.emit('keypress', event, eventFlags);
    if (eventFlags.wasHandled) {
      return null;
    } else {
      return getDefaultKeyBinding(event);
    }
  }

  _handleKeyCommand(command: string): boolean {
    const editorState = this.props.value.getEditorState();
    const newEditorState = RichUtils.handleKeyCommand(editorState, command);
    if (newEditorState) {
      this._onChange(newEditorState);
      return true;
    } else {
      return false;
    }
  }

  _onChange(editorState: EditorState) {
    let { onChange, value } = this.props; // eslint-disable-line
    if (onChange !== null) {
      const newValue = value.setEditorState(editorState);
      onChange(newValue);
    }
  }

  _focus() {
    this.refs.editor.focus();
  }
  render(): React.Element {
    const { value, className, editorClassName, placeholder, ...otherProps } = this.props;
    let { toolbarClassName, customStyleMap } = this.props;
    let editorState = value.getEditorState();
    customStyleMap = customStyleMap ? { ...styleMap, ...customStyleMap } : styleMap;

    // If the user changes block type before entering any text, we can either
    // style the placeholder or hide it. Let's just hide it for now.
    let combinedEditorClassName = cx({
      [styles.editor]: true,
      [styles.hidePlaceholder]: this._shouldHidePlaceholder(),
    }, editorClassName);
    return (
      <div className={ cx(styles.root, className) }>
        <EditorToolbar
          className={ toolbarClassName }
          keyEmitter={ this._keyEmitter }
          editorState={ editorState }
          onChange={ this._onChange }
          focusEditor={ this._focus }
        />
        <div className={ combinedEditorClassName }>
          <Editor
            { ...otherProps }
            blockStyleFn={ getBlockStyle }
            customStyleMap={ customStyleMap }
            editorState={ editorState }
            handleReturn={ this._handleReturn }
            keyBindingFn={ this._customKeyHandler }
            handleKeyCommand={ this._handleKeyCommand }
            onTab={ this._onTab }
            onChange={ this._onChange }
            placeholder={ placeholder }
            ref="editor"
            spellCheck
          />
        </div>
      </div>
    );
  }
}

function getBlockStyle(block: ContentBlock): string {
  const result = styles.block;
  switch (block.getType()) {
    case 'unstyled':
      return cx(result, styles.paragraph);
    case 'blockquote':
      return cx(result, styles.blockquote);
    case 'code-block':
      return cx(result, styles.codeBlock);
    default:
      return result;
  }
}

const decorator = new CompositeDecorator([LinkDecorator]);

function createEmptyValue(): EditorValue {
  return EditorValue.createEmpty(decorator);
}

function createValueFromString(markup: string, format: string): EditorValue {
  return EditorValue.createFromString(markup, format, decorator);
}

// $FlowIssue - This should probably not be done this way.
Object.assign(BoldrEditor, {
  EditorValue,
  decorator,
  createEmptyValue,
  createValueFromString,
});

export { EditorValue, decorator, createEmptyValue, createValueFromString };
