/* @flow */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons';
import classnames from 'classnames';
import { StyleClasses, InputField } from 'boldr-ui';
import FieldEditor from '../../../Admin/Post/NewPost/components/NewPostForm/FieldEditor';

type Props = {
  handleSubmit?: Function,
  reset?: Function,
  submitting?: boolean,
  fields?: Object,
  pristine?: boolean,
  className: ?string,
};

const style = {
  margin: 12,
};
const BASE_ELEMENT = StyleClasses.COMMENT_FORM;

let CommentForm = (props: Props) => {
  // eslint-disable-line
  const { handleSubmit, reset, className } = props;
  const classes = classnames(BASE_ELEMENT, className);
  return (
    <div className={ classes }>
      <form className="boldr-form__comment" onSubmit={ handleSubmit }>
        <Field id="content" name="content" component={ FieldEditor } type="text" label="Your comment" />

        <div className="form__footer">
          <Button type="submit" label="Save" style={ style } raised primary />
          <Button label="Reset" onClick={ reset } style={ style } raised secondary />
        </div>
      </form>
    </div>
  );
};
CommentForm = reduxForm({
  form: 'newCommentForm',
})(CommentForm);

export default CommentForm;
