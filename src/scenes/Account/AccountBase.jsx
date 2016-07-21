import React from 'react';

const AccountBase = props => {
  return (
    <div>
      { props.children }
    </div>
  );
};

AccountBase.propTypes = {
  children: React.PropTypes.node
};

export default AccountBase;
