import React from 'react';

const Dashboard = props => {
  return (
     <div>
       { props.children }
     </div>
  );
};

Dashboard.propTypes = {
  children: React.PropTypes.node
};

export default Dashboard;
