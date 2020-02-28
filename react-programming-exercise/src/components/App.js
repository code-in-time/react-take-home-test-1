import React from 'react';
import ViewTable from './ViewTable';
import NewDataForm from './NewDataForm';

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
