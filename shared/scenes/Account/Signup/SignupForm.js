/* @flow */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons';
import { TextField } from '../../../components/Form';
import { Row, Col } from '../../../components/Layout';
import validate from './validate';

type Props = {
  handleSubmit?: Function
};

const SignupForm = (props: Props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit } className="boldr-form__generic">
      <Row>
        <Col xs={ 6 }>
          <Field name="email"
            type="email"
            component={ TextField }
            label="Email address"
          />
      </Col>
      <Col xs={ 6 }>
        <Field name="password"
          type="password"
          component={ TextField }
          label="Password"
        />
      </Col>
      </Row>
      <Row>
        <Col xs={ 6 }>
        <Field name="first_name"
          type="text"
          component={ TextField }
          label="First name"
        />
      </Col>
      <Col xs={ 6 }>
        <Field name="last_name"
          type="text"
          component={ TextField }
          label="Last name"
        />
      </Col>
      </Row>
      <Row>
        <Col xs={ 12 }>
          <Row xsCenter>
            <Col xs={ 6 }>
              <Field name="display_name"
                type="text"
                component={ TextField }
                label="Display name"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Button style={ { marginTop: '25px' } } raised primary label="Create Account" type="submit" />
    </form>
  );
};

export default reduxForm({
  form: 'userSignupForm',
  validate,
})(SignupForm);
