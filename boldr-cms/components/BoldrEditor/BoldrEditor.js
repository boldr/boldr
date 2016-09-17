import React, { Component, PropTypes } from 'react';
import {
  AtomicBlockUtils,
  convertFromRaw,
  convertToRaw,
  CompositeDecorator,
  Editor,
  EditorState,
  Entity,
  RichUtils,
} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import {
  CustomBlockControls, InlineStyleControls, BlockStyleControls, BLOCK_CONTROLS, INLINE_CONTROLS
} from './controls';
import linkDecorator from './decorators/link';
import './TextEditor.scss';

class BoldrEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    content: PropTypes.object,
    controlDisplay: React.PropTypes.oneOf(['block', 'inline']),
    blockControls: React.PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(React.PropTypes.string),
    ]),
    inlineControls: React.PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(React.PropTypes.string),
    ]),
    customBlockControls: React.PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(React.PropTypes.string),
    ]),
    readOnly: PropTypes.bool,
    linkTarget: PropTypes.oneOf(['_blank', '_parent', '_self', '_top']),
    placeholder: PropTypes.string,
    customBlocks: PropTypes.object,
    spellCheck: PropTypes.bool,
    stripPastedStyles: PropTypes.bool
  };
  constructor(props) {
    super(props);

    const decorator = new CompositeDecorator([
      linkDecorator,
    ]);

    let editorState = EditorState.createEmpty(decorator);
    if (props.content) {
      editorState = EditorState.createWithContent(convertFromRaw(props.content), decorator);
    }
    this.state = {
      editorState,
      showUrlInput: false,
      urlValue: '',
      showCustomBlockInput: false,
      customBlockType: null,
      customBlockData: {},
    };

    this.focus = () => this.refs.editor.focus();

    this.onChange = this._onChange.bind(this);
    this.handleKeyCommand = command => this._handleKeyCommand(command);
    this.toggleBlockType = type => this._toggleBlockType(type);
    this.toggleInlineStyle = style => this._toggleInlineStyle(style);
    this.toggleCustomBlockInput = nextState => this._toggleCustomBlockInput(nextState);

    this.closeLinkPrompt = this._closeLinkPrompt.bind(this);
    this.confirmLink = this._confirmLink.bind(this);
    this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);
    this.onUrlChange = e => this.setState({ urlValue: e.target.value });
    this.promptForLink = this._promptForLink.bind(this);
    this.removeLink = this._removeLink.bind(this);

    this.confirmBlock = this._confirmBlock.bind(this);
    this.onBlockInputKeyDown = this._onBlockInputKeyDown.bind(this);
    this.onBlockDataChange = this._onBlockDataChange.bind(this);
    this.renderBlock = this._renderBlock.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const contentState = this.state.editorState.getCurrentContent();

    if (
      newProps.content &&
      ! this.props.content &&
      ! contentState.hasText()
    ) {
      const editorState = EditorState.createWithContent(convertFromRaw(newProps.content));
      this.setState({ editorState });
    }
  }
  // onChange = (editorState) => {
  //   this.setState({
  //     editorState
  //   });
  //
  //   const html = stateToHTML(editorState.getCurrentContent());
  //   this.props.onChange(html);
  // }

  onFocus = (e) => {
    this.refs.editor.focus();
    this.props.onFocus(e);
  }

  _onChange(editorState) {
    this.setState({ editorState }, () => {
      if (this.props.onChange) {
        const contentState = editorState.getCurrentContent();
        const html = stateToHTML(editorState.getCurrentContent());
        if (contentState.hasText()) {
          this.props.onChange(html);
          this.props.onChange(convertToRaw(contentState));
        } else {
          this.props.onChange(null);
        }
      }
    });
  }

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }
  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    if (inlineStyle === 'LINK') {
      if (! this.state.showUrlInput) {
        this.promptForLink();
      } else {
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

  _confirmBlock(e, data) {
    this.setState({
      customBlockData: {},
      customBlockType: null,
      editorState: this._insertCustomBlock(
          this.state.editorState,
          this.state.customBlockType,
          data || this.state.customBlockData
        ),
      showCustomBlockInput: false,
    }, () => {
      setTimeout(() => this.focus(), 0);
    });
  }

  _onBlockInputKeyDown(e) {
    if (e.which === 13) {
      this._confirmBlock();
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

  _renderBlock(block) {
    if (block.getType() === 'atomic') {
      const entityType = Entity.get(block.getEntityAt(0)).getType();

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
  _closeLinkPrompt() {
    this.setState({
      showUrlInput: false,
      urlValue: '',
    }, () => {
      setTimeout(() => {
        this.focus();
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
  _promptForLink() {
    const { editorState } = this.state;
    const selection = editorState.getSelection();

    if (! selection.isCollapsed()) {
      if (RichUtils.currentBlockContainsLink(editorState)) {
        this.removeLink();
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

    this.onChange(RichUtils.toggleLink(editorState, selection, null));
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
          onToggle={ this.toggleBlockType }
        />
      );
    }
    if (this.props.inlineControls) {
      controls.push(
        <InlineStyleControls
          editorState={ this.state.editorState }
          onToggle={ this.toggleInlineStyle }
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
          display={ this.props.controlDisplay }
          key="custom-block-controls"
          onClick={ this.toggleCustomBlockInput }
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
            onChange={ this.onUrlChange }
            ref="url"
            type="text"
            value={ this.state.urlValue }
            onKeyDown={ this.onLinkInputKeyDown }
          />
          <button
            className="DraftJSEditor-urlInputButton"
            onMouseDown={ this.confirmLink }
          >
            Confirm
          </button>
        </div>
      );
    }
    let blockInput;
    if (this.state.showCustomBlockInput) {
      blockInput = this.props.customBlocks[this.state.customBlockType].renderInputForm.apply(
        this,
        [
          this.state.customBlockData,
          this.onBlockDataChange,
          this.onBlockInputKeyDown,
          this.confirmBlock,
        ]
      );
    }
    return (
      <div className="DraftJSEditor-root">
        { !this.props.readOnly ? this.renderControls() : null }
        { !this.props.readOnly ? urlInput : null }
        { !this.props.readOnly ? blockInput : null }
        <div className={ className } onClick={ this.focus }>
          <Editor ref="editor"
            editorState={ editorState }
            blockRendererFn={ this.renderBlock }
            placeholder={ this.props.placeholder }
            onChange={ this.onChange }
            onFocus={ this.onFocus }
            onBlur={ this.props.onBlur }
            handleKeyCommand={ this.handleKeyCommand }
            spellCheck={ this.props.spellCheck }
            stripPastedStyles={ this.props.stripPastedStyles }
            readOnly={ this.props.readOnly }
          />
        </div>
      </div>
    );
  }
}

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
