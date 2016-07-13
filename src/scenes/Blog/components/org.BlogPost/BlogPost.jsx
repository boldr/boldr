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

        {
          this.props.article
        }
      </div>
    );
  }
}

export default BlogPost;
