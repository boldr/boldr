import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Helmet from 'react-helmet';
import Message from 'components/atm.Message';
import TopBar from 'components/mol.TopBar';
import '../../styles/main.scss';

const CoreLayout = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Boldr"
        titleTemplate={ '%s | powered by Boldr' }
      />
      <TopBar />
      <Message />
      { children }
    </div>
  );
};

CoreLayout.propTypes = {
  children: PropTypes.node
};

export default CoreLayout;
