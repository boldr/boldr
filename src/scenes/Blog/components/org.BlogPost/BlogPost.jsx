import React, { Component } from 'react';
import { Editor } from 'draft-js';
import { Link } from 'react-router';
import Moment from 'moment';

class BlogPost extends Component {

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
          { this.props.user.displayName }
        </div>
      </div>
    );
  }
}

export default BlogPost;
