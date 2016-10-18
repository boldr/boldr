/* eslint-disable react/prefer-stateless-function */
/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { fetchPagesIfNeeded } from 'state/dux/page';
import Pages from './Pages';

export type Props = {
  pages?: Object,
  fetchPagesIfNeeded?: Function,
};
const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages
  };
};

@connect(mapStateToProps)
@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPagesIfNeeded())
})
class PagesContainer extends Component {
  props: Props;

  render() {
    return (
      <Pages { ...this.props } />
    );
  }
}

export default PagesContainer;
