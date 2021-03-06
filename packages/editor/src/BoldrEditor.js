/* eslint-disable max-lines, react/no-array-index-key, no-param-reassign, react/default-props-match-prop-types */
/* @flow */
import React from 'react';
import type { Node } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  CompositeDecorator,
} from 'draft-js';
import type { DraftDecoratorType } from 'draft-js';
import cn from 'classnames';

import { convertToHTML, convertFromHTML } from 'draft-convert';
import { getToHTMLConfig, getFromHTMLConfig } from './core/convert';
import { ModalHandler, FocusHandler, KeyDownHandler } from './core/eventHandlers';
import {
  handleNewLine,
  getCustomStyleMap,
  getSelectedBlocksType,
  changeListDepth,
  blockRenderMap,
  blockStyleFn,
  filter,
  mergeRecursive,
} from './utils';

import type { CustomStyleMap } from './utils/inline';
import * as Controls from './components/Controls';
import handlePastedText from './utils/handlePaste';
import getLinkDecorator from './core/decorators/Link/Link';
import getBlockRenderFunc from './core/blockRender';
import configDefaults from './core/config';
import type { ToolbarConfig } from './core/config';
import type { BoldrEditorType } from './BoldrEditorType';

export type State = {
  editorState: EditorState,
  // is the editor focused
  editorFocused: boolean,
  // the toolbar config object
  toolbar: ToolbarConfig,
};

export default class BoldrEditor extends React.Component<BoldrEditorType, State> {
  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    toolbarOnFocus: false,
    toolbarHidden: false,
    stripPastedStyles: false,
    customDecorators: [],
  };

  constructor(props: BoldrEditorType) {
    super(props);
    const toolbar = mergeRecursive(configDefaults, props.toolbar);

    this.state = {
      editorState: undefined,
      editorFocused: false,
      toolbar,
    };
    const wrapperId = props.wrapperId ? props.wrapperId : Math.floor(Math.random() * 10000);
    this.wrapperId = `be-wrapper-${wrapperId}`;
    this.modalHandler = new ModalHandler();
    this.focusHandler = new FocusHandler();
    this.blockRendererFn = getBlockRenderFunc(
      {
        isReadOnly: this.isReadOnly,
        isImageAlignmentEnabled: this.isImageAlignmentEnabled,
        getEditorState: this.getEditorState,
        onChange: this.onChange,
      },
      props.customBlockRenderFunc,
    );
    this.editorProps = this.filterEditorProps(props);
    this.customStyleMap = getCustomStyleMap();
  }

  state: State;

  componentWillMount(): void {
    this.compositeDecorator = this.getCompositeDecorator();
    const editorState = this.createEditorState(this.compositeDecorator);

    this.setState({
      editorState,
    });
  }

  componentDidMount(): void {
    this.modalHandler.init(this.wrapperId);
  }

  componentWillReceiveProps(props: BoldrEditorType) {
    const newState = {};
    // if toolbar changes, merge changes into the default settings
    if (this.props.toolbar !== props.toolbar) {
      const toolbar = mergeRecursive(configDefaults, props.toolbar);
      newState.toolbar = toolbar;
    }

    this.setState(newState);
    this.editorProps = this.filterEditorProps(props);
    this.customStyleMap = getCustomStyleMap();
  }

  componentWillUnmount() {
    clearTimeout(this.syncTimer);
  }

  wrapperId: string;

  modalHandler: ModalHandler;

  focusHandler: FocusHandler;

  blockRendererFn: Function;

  customStyleMap: CustomStyleMap;

  compositeDecorator: DraftDecoratorType;

  editorProps: Object;

  props: BoldrEditorType;

  createEditorState = compositeDecorator => {
    let editorState, convertedContent;
    let { initialContent, contentFormat } = this.props;

    contentFormat = contentFormat || 'raw';
    initialContent = initialContent || '';

    if (!initialContent) {
      editorState = EditorState.createEmpty(compositeDecorator);
    } else {
      if (contentFormat === 'html') {
        convertedContent = convertFromHTML(getFromHTMLConfig())(initialContent);
      } else if (contentFormat === 'raw') {
        convertedContent = convertFromRaw(initialContent);
      }

      editorState = EditorState.createWithContent(convertedContent, compositeDecorator);
    }

    return editorState;
  };

  setWrapperReference: Function = (ref: Object): void => {
    this.wrapper = ref;
  };

  setEditorReference: Function = (ref: Object): void => {
    this.editor = ref;
  };

  /**
   * On change method.
   * @function onChange
   * @param {EditorState} editorState New editor state.
   * @returns {undefined}
   */
  onChange = (editorState: EditorState) => {
    const { readOnly, onChange, onRawChange, onHtmlChange } = this.props;
    if (
      !readOnly &&
      !(getSelectedBlocksType(editorState) === 'atomic' && editorState.getSelection().isCollapsed)
    ) {
      this.setState({ editorState }, () => {
        clearTimeout(this.syncTimer);
        this.syncTimer = setTimeout(() => {
          if (onChange) {
            onChange(this.getContent());
          }
          if (onHtmlChange) {
            onHtmlChange(this.getHtmlContent());
          }
          if (onRawChange) {
            onRawChange(this.getRawContent());
          }
        }, 100);
      });
    }
  };

  getCompositeDecorator = (): void => {
    const decorators = [
      ...this.props.customDecorators,
      getLinkDecorator({
        showOpenOptionOnHover: this.state.toolbar.link.showOpenOptionOnHover,
      }),
    ];
    return new CompositeDecorator(decorators);
  };

  getHtmlContent() {
    return this.getContent('html');
  }

  getRawContent() {
    return this.getContent('raw');
  }

  getContent(format: string) {
    const toolbar = mergeRecursive(configDefaults, this.props.toolbar);
    format = format || this.props.contentFormat || 'raw';
    const contentState = this.getContentState();

    const colors = toolbar.colorPicker.colors;
    const fontSizes = toolbar.fontSize.options;
    const fontFamilies = toolbar.fontFamily.options;

    return format === 'html'
      ? convertToHTML(
          getToHTMLConfig({
            contentState,
            colors,
            fontSizes,
            fontFamilies,
          }),
        )(contentState)
      : convertToRaw(contentState);
  }

  getContentState() {
    return this.getEditorState().getCurrentContent();
  }

  getEditorState = () => {
    return this.state.editorState;
  };

  filterEditorProps = props => {
    return filter(props, [
      'onChange',
      'onEditorStateChange',
      'onContentStateChange',
      'initialContentState',
      'defaultContentState',
      'contentState',
      'editorState',
      'initialContent',
      'defaultEditorState',
      'toolbarOnFocus',
      'toolbar',
      'toolbarCustomButtons',
      'toolbarClassName',
      'editorClassName',
      'toolbarHidden',
      'wrapperClassName',
      'toolbarStyle',
      'editorStyle',
      'wrapperStyle',
      'uploadCallback',
      'onFocus',
      'onBlur',
      'onTab',

      'hashtag',
      'ariaLabel',
      'customBlockRenderFunc',
      'customDecorators',
    ]);
  };

  getWrapperRef = () => this.refs.wrapper;

  isReadOnly = () => this.props.readOnly;

  isImageAlignmentEnabled = () => this.state.toolbar.image.alignmentEnabled;

  focusEditor: Function = (): void => {
    setTimeout(() => {
      this.editor.focus();
    });
  };

  onEditorBlur: Function = (): void => {
    this.setState({
      editorFocused: false,
    });
  };

  handlePastedText = (text, html) => {
    const { editorState } = this.state;
    return handlePastedText(text, html, editorState, this.onChange);
  };

  onEditorFocus: Function = (event: SyntheticEvent<>): void => {
    const { onFocus } = this.props;
    this.setState({
      editorFocused: true,
    });
    if (onFocus && this.focusHandler.isEditorFocused()) {
      onFocus(event);
    }
  };

  onEditorMouseDown: Function = (): void => {
    this.focusHandler.onEditorMouseDown();
  };

  onTab: Function = (event: SyntheticEvent<>): void => {
    const { onTab } = this.props;
    if (!onTab || !onTab(event)) {
      const editorState = changeListDepth(this.state.editorState, event.shiftKey ? -1 : 1, 4);
      if (editorState && editorState !== this.state.editorState) {
        this.onChange(editorState);
        event.preventDefault();
      }
    }
  };

  onToolbarFocus: Function = (event: SyntheticEvent<>): void => {
    const { onFocus } = this.props;
    if (onFocus && this.focusHandler.isToolbarFocused()) {
      onFocus(event);
    }
  };

  onWrapperBlur: Function = (event: SyntheticEvent<>) => {
    const { onBlur } = this.props;
    if (onBlur && this.focusHandler.isEditorBlur(event)) {
      onBlur(event);
    }
  };

  handleKeyCommand: Function = (command: Object): boolean => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  handleReturn: Function = (event: SyntheticEvent<>): boolean => {
    const editorState = handleNewLine(this.state.editorState, event);
    if (editorState) {
      this.onChange(editorState);
      return true;
    }
    return false;
  };

  preventDefault: Function = (event: SyntheticEvent<>) => {
    if (event.target.tagName === 'INPUT') {
      this.focusHandler.onInputMouseDown();
    } else {
      event.preventDefault();
    }
  };

  render(): Node {
    const { editorState, editorFocused, toolbar } = this.state;
    const {
      toolbarCustomButtons,
      toolbarOnFocus,
      toolbarHidden,
      editorClassName,
      wrapperClassName,
      editorStyle,
      wrapperStyle,
      uploadCallback,
      ariaLabel,
    } = this.props;

    const controlProps = {
      modalHandler: this.modalHandler,
      editorState,
      onChange: this.onChange,
    };

    const toolbarIsVisible =
      !toolbarHidden && (editorFocused || this.focusHandler.isInputFocused() || !toolbarOnFocus);

    return (
      <div
        ref={this.setWrapperReference}
        id={this.wrapperId}
        className={cn('be-wrapper', wrapperClassName)}
        style={wrapperStyle}
        onClick={this.modalHandler.onEditorClick}
        onBlur={this.onWrapperBlur}
        aria-label="be-wrapper">
        <div
          className={cn('be-toolbar', {
            'be-editor--hidden': !toolbarIsVisible,
          })}
          // $FlowIssue
          aria-hidden={(!editorFocused && toolbarOnFocus).toString()}
          onFocus={this.onToolbarFocus}
          onMouseDown={this.preventDefault}
          aria-label="be-toolbar">
          {toolbar.options.map((opt, index) => {
            const Control = Controls[opt];
            const config = toolbar[opt];
            if (opt === 'image' && uploadCallback) {
              // $FlowIssue
              config.uploadCallback = uploadCallback;
            }
            return <Control key={index} {...controlProps} config={config} />;
          })}
          {toolbarCustomButtons &&
            toolbarCustomButtons.map((button, index) =>
              React.cloneElement(button, { key: index, ...controlProps }),
            )}
        </div>

        <div
          className={cn('be-main', editorClassName)}
          style={editorStyle}
          onClick={this.focusEditor}
          onFocus={this.onEditorFocus}
          onBlur={this.onEditorBlur}
          onKeyDown={KeyDownHandler.onKeyDown}
          onMouseDown={this.onEditorMouseDown}>
          <Editor
            ref={this.setEditorReference}
            onTab={this.onTab}
            spellcheck={this.props.spellcheck}
            editorState={editorState}
            onChange={this.onChange}
            blockStyleFn={blockStyleFn}
            customStyleMap={getCustomStyleMap()}
            handlePastedText={this.handlePastedText}
            handleReturn={this.handleReturn}
            blockRendererFn={this.blockRendererFn}
            handleKeyCommand={this.handleKeyCommand}
            blockRenderMap={blockRenderMap}
            ariaLabel={ariaLabel || 'boldr-editor'}
            {...this.editorProps}
          />
        </div>
      </div>
    );
  }
}
