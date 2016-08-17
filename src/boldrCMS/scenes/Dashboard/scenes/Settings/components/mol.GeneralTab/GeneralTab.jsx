import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButtonGroup from '../../../../../../components/atm.FormComponents/RadioButtonGroup';
import TextField from '../../../../../../components/atm.FormComponents/TextField';
import styles from './styles.css';

const cx = styles::classNames;

let GeneralTab = props => { // eslint-disable-line
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
     <div className={ cx('root') }>
        <form onSubmit={ handleSubmit }>
          <div className={ cx('row') }>
          <Field name="siteName" type="text" component={ TextField } floatingLabelText="Website name" />
          </div>
          <div className={ cx('row') }>
          <Field name="siteUrl" type="text" component={ TextField } floatingLabelText="Website URL" />
          </div>
          <div className={ cx('row') }>
          <Field name="description" type="text"
            component={ TextField } multiLine rows={ 3 }
            floatingLabelText="Website description"
          />
          </div>
          <div className={ cx('row') }>
          <Field name="analyticsId" type="text" component={ TextField } floatingLabelText="Google Analytics ID" />
          </div>
          <div className={ cx('row') }>
          <Field name="allowRegistration" component={ RadioButtonGroup }>

            <RadioButton
              value="true"
              label="Yes"
            />
            <RadioButton
              value="false"
              label="No"
            />
          </Field>
          </div>
          <div className={ cx('row') }>
          <RaisedButton type="submit" secondary label="Save" disabled={ pristine || submitting } />
          <RaisedButton label="Undo Changes" onClick={ reset } />
          </div>
        </form>
    </div>
  );
};
GeneralTab.propTypes = {
  settings: PropTypes.object,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  reset: PropTypes.func
};

GeneralTab = reduxForm({
  form: 'GeneralTabSettings'
})(GeneralTab);

GeneralTab = connect(
  state => ({
    initialValues: state.boldr
  })
)(GeneralTab);

export default GeneralTab;
