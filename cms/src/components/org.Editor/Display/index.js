import React, { Component, PropTypes } from 'react';
import {
  Editor,
  EditorState,
  convertFromRaw
} from 'draft-js';

import { getBlockStyle } from '../shared/utilities';
import { decorator } from '../shared/Decorator/index';

const propTypes = {
  content: PropTypes.string
};

class TextDisplay extends Component {
  constructor(props) {
    super(props);

    if (props.content) {
      const blocks = convertFromRaw(JSON.parse(props.content));
      this.state = { editorState: EditorState.createWithContent(blocks, decorator) };
    } else {
      this.state = {
        editorState: EditorState.createEmpty(decorator)
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.content && nextProps.content) {
      const blocks = convertFromRaw(JSON.parse(nextProps.content));
      this.setState({ editorState: EditorState.createWithContent(blocks, decorator) });
    }
  }

  render() {
    return (
      <div>
        <Editor
          blockStyleFn={ getBlockStyle }
          editorState={ this.state.editorState }
          readOnly
        />
      </div>
    );
  }
}

TextDisplay.propTypes = propTypes;

export default TextDisplay;
