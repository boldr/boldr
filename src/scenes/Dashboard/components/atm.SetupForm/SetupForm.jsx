import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';

import SetupFormPage1 from './formPage1';
import SetupFormPage2 from './formPage2';
import SetupFormPage3 from './formPage3';

class SetupForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        { page === 1 && <SetupFormPage1 onSubmit={ this.nextPage } /> }
        { page === 2 && <SetupFormPage2 previousPage={ this.previousPage } onSubmit={ this.nextPage } /> }
        { page === 3 && <SetupFormPage3 previousPage={ this.previousPage } onSubmit={ onSubmit } /> }
      </div>
  );
  }
}

export default SetupForm;
