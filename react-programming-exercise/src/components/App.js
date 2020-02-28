import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ViewTable from './ViewTable';
import NewDataForm from './NewDataForm';
import {cloneDeep} from 'lodash';

class App extends Component {


  render() {
    return (
      <div>
        <ViewTable />
        <NewDataForm />
      </div>
    );
  }
}

export default App;
