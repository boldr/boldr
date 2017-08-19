/* eslint-disable react/no-array-index-key */
// @flow
import React, { Component } from 'react';
// $FlowIssue
import { Modifier, EditorState, RichUtils } from 'draft-js';
import Dropdown from '../Dropdown';
import type { OptionFontFamilies } from '../../core/configs/options';
// import MediaPicker from '../MediaPicker';

export type Props = {
  defaultCaption?: string,
  editorState: EditorState,
  fontFamilies: OptionFontFamilies,
  currentInlineStyle: any,
  selection: any,
  language: Object,
  onChange: Function,
};

export default class FontFamily extends Component<Props, *> {
  props: Props;
  toggleFontFamily = e => {
    const fontFamily = e.currentTarget.dataset.name;
    const toggledFontFamily = `FONTFAMILY-${fontFamily}`;
    const { editorState, selection, currentInlineStyle, fontFamilies } = this.props;

    const nextContentState = fontFamilies.reduce((contentState, item) => {
      return Modifier.removeInlineStyle(contentState, selection, `FONTFAMILY-${item.name}`);
    }, editorState.getCurrentContent());

    let nextEditorState = EditorState.push(editorState, nextContentState, 'change-inline-style');

    if (selection.isCollapsed()) {
      nextEditorState = currentInlineStyle.reduce((state, fontFamily) => {
        return RichUtils.toggleInlineStyle(state, fontFamily);
      }, nextEditorState);
    }

    if (!currentInlineStyle.has(toggledFontFamily)) {
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, toggledFontFamily);
    }

    this.props.onChange(nextEditorState);
  };
  render() {
    let caption = null;
    let currentIndex = null;
    const { defaultCaption, currentInlineStyle, language, fontFamilies } = this.props;

    fontFamilies.find((item, index) => {
      if (currentInlineStyle.has(`FONTFAMILY-${item.name}`)) {
        caption = item.name;
        currentIndex = index;
        return true;
      }
      return false;
    });

    const isFirstItemActive = currentIndex === 0;
    caption = caption || defaultCaption || language.controls.fontFamily;

    return (
      <Dropdown
        caption={caption}
        hoverTitle={language.controls.fontFamily}
        arrowActive={isFirstItemActive}
        className={'be-toolbar__item be-dropdown be-font-family__dropdown'}
      >
        <ul className="be-dropdown__menu">
          {fontFamilies.map((item, index) => {
            return (
              <li
                key={index}
                className={`be-dropdown__menu-item ${index === currentIndex ? 'active' : ''}`}
                data-name={item.name}
                onClick={this.toggleFontFamily}
              >
                <span
                  style={{
                    fontFamily: item.family,
                  }}
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </Dropdown>
    );
  }
}
