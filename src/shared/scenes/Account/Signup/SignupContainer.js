// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { doSignup } from '../../../state';
import Signup from './Signup';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: submit => {
      dispatch(doSignup(submit));
    },
  };
};

export default connect(null, mapDispatchToProps)(Signup);
