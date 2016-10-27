/* eslint-disable no-duplicate-imports */
/* @flow weak */
import React, { Component } from 'react';
import {
  AtomicBlockUtils, convertFromRaw, convertToRaw, CompositeDecorator, Editor,
  EditorState, Entity, RichUtils
} from 'draft-js';
import type { ContentBlock } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import {
  CustomBlockControls, InlineStyleControls, BlockStyleControls, BLOCK_CONTROLS, INLINE_CONTROLS
} from './controls';
import linkDecorator from './decorators/link';
import EditorValue from './lib/EditorValue';

// types
type ChangeHandler = (value: EditorValue) => any;
export type Props = {
  onChange: ChangeHandler,
  onBlur: ?Function,
  onFocus: ?Function,
  closeLinkPrompt: ?Function,
  content: Object,
  controlDisplay?: 'block' | 'inline',
  blockControls?: boolean | Array<string>,
  inlineControls?: boolean | Array<string>,
  customBlockControls?: boolean | Array<string>,
  readOnly?: boolean,
  linkTarget?: '_blank' | '_parent' | '_self' | '_top',
  placeholder?: string,
  customBlocks?: Object,
  spellCheck?: boolean,
  stripPastedStyles?: boolean,
  value: EditorValue
};

type State = {
  editorState: EditorState,
  showUrlInput: boolean,
  urlValue: string,
  showCustomBlockInput: boolean,
  customBlockData: Object,
  customBlockType: any
};

class BoldrEditor extends Component {
  props: Props;
  state: State;
  constructor(props: Props) {
    super(props);

    const decorator = new CompositeDecorator([
      linkDecorator
    ]);

    let editorState = EditorState.createEmpty(decorator);

    if (props.value) {
      editorState = EditorState.createWithContent(stateFromHTML(props.value), decorator);
    }

    this.state = {
      editorState,
      showUrlInput: false,
      urlValue: '',
      showCustomBlockInput: false,
      customBlockType: null,
      customBlockData: {}
    };

    (this: any).onChange = this.onChange.bind(this);
    (this: any).handleKeyCommand = command => this._handleKeyCommand(command);
    (this: any).toggleBlockType = type => this._toggleBlockType(type);
    (this: any).toggleInlineStyle = style => this._toggleInlineStyle(style);
    (this: any).toggleCustomBlockInput = nextState => this._toggleCustomBlockInput(nextState);

    (this: any).closeLinkPrompt = this.closeLinkPrompt.bind(this);
    (this: any).confirmLink = this._confirmLink.bind(this);
    (this: any).onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);

    (this: any).onUrlChange = e => this.setState({ urlValue: e.target.value });
    (this: any).promptForLink = this.promptForLink.bind(this);
    (this: any).removeLink = this._removeLink.bind(this);

    (this: any).confirmBlock = this._confirmBlock.bind(this);
    (this: any).onBlockInputKeyDown = this._onBlockInputKeyDown.bind(this);
    (this: any).onBlockDataChange = this._onBlockDataChange.bind(this);
    (this: any).renderBlock = this.renderBlock.bind(this);
  }


  componentWillReceiveProps(newProps: Object) {
    const contentState = this.state.editorState.getCurrentContent();

    if (newProps.content && !this.props.content && !contentState.hasText()) {
      const editorState = EditorState.createWithContent(convertFromRaw(newProps.content));
      this.setState({ editorState });
    }
  }

  onFocus = (e: Object) => {
    this.refs.editor.focus();
    this.props.onFocus(e);
  }

  onChange(editorState) {
    this.setState({ editorState }, () => {
      // const contentState = editorState.getCurrentContent();
      const html = stateToHTML(editorState.getCurrentContent());
      this.props.onChange(html);
    });
  }

  _handleKeyCommand(command: string): boolean {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      (this: any).onChange(newState);
      return true;
    }
    return false;
  }
  _toggleBlockType(blockType) {
    (this: any).onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    if (inlineStyle === 'LINK') {
      if (! (this: any).state.showUrlInput) {
        this.promptForLink();
      } else {
        // $FlowIssue
        this.removeLink();
      }
    } else {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          inlineStyle
        )
      );
    }
  }

  _confirmBlock(e: Object, data: Object) {
    this.setState({
      customBlockData: {},
      customBlockType: null,
      editorState: this._insertCustomBlock(
          this.state.editorState,
          this.state.customBlockType,
          data || this.state.customBlockData
        ),
      showCustomBlockInput: false,
    }, () => { // $FlowIssue
      setTimeout(() => this.focus(), 0);
    });
  }

  _onBlockInputKeyDown(e: Object) {
    if (e.which === 13) {
      (this: any)._confirmBlock();
    }
  }

  _onBlockDataChange(customBlockData) {
    this.setState({ customBlockData });
  }

  _insertCustomBlock(editorState, type, data) {
    const entityKey = Entity.create(type, 'IMMUTABLE', data);

      // if you use an empty string for the block content here Draft will die
    return AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
  }

  _toggleCustomBlockInput(nextState) {
    if (this.state.showCustomBlockInput && nextState.customBlockType === this.state.customBlockType) {
      this.setState({
        showCustomBlockInput: false,
        customBlockType: null,
        customBlockData: {},
      });
    } else {
      this.setState(nextState, () => {
        if (this.refs.customBlockInput) {
          this.refs.customBlockInput.focus();
        }
      });
    }
  }

  renderBlock(block) {
    if (block.getType() === 'atomic') {
      const entityType = Entity.get(block.getEntityAt(0)).getType();
      // $FlowIssue
      return this.props.customBlocks[entityType] ? this.props.customBlocks[entityType].getBlockRenderer() : null;
    }

      // fall back to default renderer
    return null;
  }

  // Link setup

  /**
   * @private
   * @name _closeLinkPrompt
   * closes the link alert
   */
  closeLinkPrompt() {
    this.setState({ showUrlInput: false, urlValue: '', }, () => {
      setTimeout(() => {
        (this: any).focus();
      }, 0);
    });
  }
  /**
   * @private
   * @name _confirmLink
   */
  _confirmLink() {
    const { editorState, urlValue } = this.state;
    const entityKey = Entity.create('LINK', 'MUTABLE', { target: this.props.linkTarget, url: urlValue });

    this.onChange(
      RichUtils.toggleLink(
        editorState,
        editorState.getSelection(),
        entityKey
      )
    );

    this.closeLinkPrompt();
  }
  _focus() {
    this.refs.editor.focus();
  }
  /**
   * @private
   * @name _onLinkInputKeyDown
   * @param {Object} e  the event
   */
  _onLinkInputKeyDown(e) {
    if (e.which === 13) {
      this._confirmLink(e);
    }
  }

  /**
   * @private
   * @name _promptForLink
   */
  promptForLink() {
    const { editorState } = this.state;
    const selection = editorState.getSelection();

    if (! selection.isCollapsed()) {
      if (RichUtils.currentBlockContainsLink(editorState)) {
        (this: any).removeLink();
      } else {
        this.setState({
          showUrlInput: true,
          urlValue: '',
        }, () => {
          setTimeout(() => this.refs.url.focus(), 0);
        });
      }
    }
  }

  /**
   * @private
   * @name _removeLink
   */
  _removeLink() {
    const { editorState } = this.state;
    const selection = editorState.getSelection();

    (this: any).onChange(RichUtils.toggleLink(editorState, selection, null));
  }

  /**
   * @method renderControls
   */
  renderControls() {
    const controls = [];

    if (this.props.blockControls) {
      controls.push(
        <BlockStyleControls
          editorState={ this.state.editorState }
          controls={ this.props.blockControls }
          display={ this.props.controlDisplay }
          key="block-controls"
          onToggle={ (this: any).toggleBlockType }
        />
      );
    }
    if (this.props.inlineControls) {
      controls.push(
        <InlineStyleControls
          editorState={ this.state.editorState }
          onToggle={ (this: any).toggleInlineStyle }
          controls={ this.props.inlineControls }
          display={ this.props.controlDisplay }
          key="inline-controls"
        />
      );
    }

    if (this.props.customBlockControls) {
      controls.push(
        <CustomBlockControls
          customBlocks={ this.props.customBlocks }
          controls={ this.props.customBlockControls }
          customBlockType={ this.state.customBlockType }
          display={ this.props.controlDisplay }
          key="custom-block-controls"
          onClick={ (this: any).toggleCustomBlockInput }
        />
      );
    }

    if (this.props.controlDisplay === 'inline') {
      return controls.reverse();
    }

    return controls;
  }

  render() {
    const { editorState } = this.state;
    let className = 'DraftJSEditor-editor';
    const contentState = this.state.editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' DraftJSEditor-hidePlaceholder';
      }
    }

    let urlInput;
    if (this.state.showUrlInput) {
      urlInput = (
        <div className="DraftJSEditor-urlInput">
          <input
            className="DraftJSEditor-urlInputText"
            onChange={ (this: any).onUrlChange }
            ref="url"
            type="text"
            value={ this.state.urlValue }
            onKeyDown={ (this: any).onLinkInputKeyDown }
          />
          <button
            className="DraftJSEditor-urlInputButton"
            onMouseDown={ (this: any).confirmLink }
          >
            Confirm
          </button>
        </div>
      );
    }
    let blockInput;
    if (this.state.showCustomBlockInput) { // $FlowIssue
      blockInput = this.props.customBlocks[this.state.customBlockType].renderInputForm.apply(
        this,
        [
          this.state.customBlockData,
          (this: any).onBlockDataChange,
          (this: any).onBlockInputKeyDown,
          (this: any).confirmBlock,
        ]
      );
    }
    return (
      <div className="DraftJSEditor-root">
        { !this.props.readOnly ? this.renderControls() : null }
        { !this.props.readOnly ? urlInput : null }
        { !this.props.readOnly ? blockInput : null }
        <div className={ className } onClick={ (this: any).focus }>
          <Editor ref="editor"
            { ...this.props }
            editorState={ editorState }
            blockRendererFn={ this.renderBlock }
            placeholder={ this.props.placeholder }
            onChange={ (this: any).onChange }
            onFocus={ this.onFocus }
            onBlur={ this.props.onBlur }
            handleKeyCommand={ (this: any).handleKeyCommand }
            spellCheck={ this.props.spellCheck }
            stripPastedStyles={ this.props.stripPastedStyles }
            readOnly={ this.props.readOnly }
          />
        </div>
      </div>
    );
  }
}
// $FlowIssue
BoldrEditor.defaultProps = {
  blockControls: BLOCK_CONTROLS,
  controlDisplay: 'block',
  inlineControls: INLINE_CONTROLS,
  customBlockControls: [],
  customBlocks: {},
  linkTarget: '_blank',
  placeholder: '',
  readOnly: false,
  spellCheck: true,
  stripPastedStyles: false,
};
export default BoldrEditor;
