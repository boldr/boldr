import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, ContentState, RichUtils, getDefaultKeyBinding,
  KeyBindingUtil, Entity, convertToRaw, CompositeDecorator, convertFromRaw,
  AtomicBlockUtils, Modifier
} from 'draft-js';
import StyleButton from './header/StyleButton';
import { stateToHTML } from 'draft-js-export-html';
import { BLOCK_TYPES, INLINE_STYLES } from './utilities';
const HANDLE_LINK = /http:\/\/(?:\[[^\]]+\]|\S+)/g;

function handleLink(contentBlock, callback) {
  findWithRegex(HANDLE_LINK, contentBlock, callback);
}

const HandleLinkSpan = (props) => {
  const href = props.children[0].props.text;
  return <a href={ href }>{ props.children }</a>;
};

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr;
  let start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

export default class BoldrEditor extends React.Component {
  constructor(props) {
    super(props);

    this.decorator = new CompositeDecorator([
      {
        strategy: handleLink,
        component: HandleLinkSpan
      }
    ]);

    this.state = {
      editorState: EditorState.createEmpty(this.decorator)
    };
    this.onChange = (editorState) => {
      this.setState({
        editorState
      });
      const contentState = editorState.getCurrentContent();

      if (contentState.getPlainText()) {
        this.props.onChange(convertToRaw(contentState));
      } else {
        this.props.onChange(null);
      }
    };
    this.focus = () => {
      this.refs.editor.focus();
    };
  }

  componentDidMount() {
    if (this.props.defaultContentState) {
      const newRawContent = {
        ...this.props.defaultContentState,
        entityMap: {}
      };
      const newContentState = convertFromRaw(newRawContent);
      this.onChange(EditorState.createWithContent(newContentState, this.decorator));
    }
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
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  handleKeyCommand(command) {
    const newState = RichUtils.toggleBlockType(this.state.editorState, command);
    this.onChange(newState);
  }

  handleTab(e) {
    e.preventDefault();
    const contentState = this.state.editorState.getCurrentContent();
    const targetRange = this.state.editorState.getSelection();
    const newContentState = Modifier.insertText(
      contentState,
      targetRange,
      '\t'
    );
    const editorState = EditorState.push(
      this.state.editorState,
      newContentState
    );

    this.onChange(editorState);
    this.focus();
  }

  render() {
    const { editorState } = this.state;

    let className = !this.props.readOnly ? 'RichEditor-editor' : null;
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className={ !this.props.readOnly ? 'RichEditor-root' : null }>
                { !this.props.readOnly &&
      <div>
                    <BlockStyleControls editorState={ editorState } onToggle={ ::this._toggleBlockType } />
                    <InlineStyleControls editorState={ editorState } onToggle={ ::this._toggleInlineStyle } />
                </div>
      }
                <div className={ className } onClick={ this.focus }>
                  <Editor editorState={ editorState }
                    onChange={ this.onChange }
                    placeholder="Enter some text ..."
                    customStyleMap={ styleMap }
                    handleKeyCommand={ ::this.handleKeyCommand }
                    onTab={ ::this.handleTab }
                    keyBindingFn={ myKeyBindingFn }
                    ref="editor"
                    readOnly={ this.props.readOnly }
                    contentEditable
                    disableContentEditableWarning
                    suppressContentEditableWarning
                  />
                </div>
            </div>
    );
  }
}

function myKeyBindingFn(e) {
  if (e.keyCode === 69 && KeyBindingUtil.hasCommandModifier(e)) {
    return 'code-block';
  }
  return getDefaultKeyBinding(e);
}

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState.getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <div className="RichEditor-controls">
      { BLOCK_TYPES.map(type =>
        <StyleButton
          key={ type.label }
          active={ type.style === blockType }
          label={ type.label }
          onToggle={ props.onToggle }
          style={ type.style }
        />
    ) }
        </div>
  );
};

const InlineStyleControls = (props) => {
  const { editorState } = props;
  const curentStyle = editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
            { INLINE_STYLES.map(type =>
              <StyleButton
                key={ type.label }
                active={ curentStyle.has(type.style) }
                label={ type.label }
                onToggle={ props.onToggle }
                style={ type.style }
              />
    ) }
        </div>
  );
};

BoldrEditor.defaultProps = {
  onChange: () => {

  }
};

BoldrEditor.propTypes = {
  editorState: React.PropTypes.object,
  children: React.PropTypes.element,
  onChange: React.PropTypes.func,
  defaultContentState: React.PropTypes.object,
  readOnly: React.PropTypes.bool,
  onToggle: React.PropTypes.func
};