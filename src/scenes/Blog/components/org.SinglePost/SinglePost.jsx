import React, { Component } from 'react';
import { Editor } from 'draft-js';
import { Link } from 'react-router';
import Moment from 'moment';
import TextDisplay from 'components/org.Editor/Display/index';

class SinglePost extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <div>
        { this.props.createdAt }
        </div>

        <div>
          { this.props.displayName }
        </div>

        <TextDisplay content={ this.props.content } />
      </div>
    );
  }
}

export default SinglePost;
