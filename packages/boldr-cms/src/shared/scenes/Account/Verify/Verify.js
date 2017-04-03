/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons';
import { FormCard } from 'boldr-ui';

import { verifyAccount } from '../../../state/modules/users/actions';

export type Props = {
  dispatch: () => void,
  params: Object,
};

class Verify extends Component {
  constructor(props: Props) {
    super(props);
    (this: any).handleVerify = this.handleVerify.bind(this);
  }
  props: Props;

  handleVerify(event, props): void {
    event.preventDefault();
    this.props.dispatch(verifyAccount(this.props.params.token));
  }

  render() {
    return (
      <div>
        <FormCard
          title="Account verification"
          form={ <Button raised primary label="Verify" onClick={ this.handleVerify } /> }
        />
      </div>
    );
  }
}

export default connect()(Verify);
