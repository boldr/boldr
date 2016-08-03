import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loader = () => (
  <div>
    <CircularProgress />
    <CircularProgress size={ 1.5 } />
    <CircularProgress size={ 2 } />
  </div>
);

export default Loader;
