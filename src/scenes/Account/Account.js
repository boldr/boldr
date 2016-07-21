import React from 'react';

const Account = (props) => <div>{ props.children }</div>;

export default Account;

Account.propTypes = {
  children: React.PropTypes.node
};
