import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ViewTable from './ViewTable';
import NewDataForm from './NewDataForm';
import {cloneDeep} from 'lodash';

const App = () => (
  <div className="App container-fluid">
    <div className="row">
      <div className="col">
        <ViewTable />
      </div>
      <div className="col">
        <NewDataForm /> 
      </div>
    </div>
  </div>
);

export default App;
