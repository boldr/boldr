/* @flow */

import React from 'react';
import Helmet from 'react-helmet';
import BaseTemplate from '../templates/Base';

function About() {
  return (
    <div>
    <BaseTemplate helmetMeta={ <Helmet title="About" /> }>
      Produced with ❤️
      by
      &nbsp;
      <a href="https://twitter.com/struesco" target="_blank" rel="noopener noreferrer">
        Steven Truesdell
      </a>
    </BaseTemplate>
    </div>
  );
}

export default About;
