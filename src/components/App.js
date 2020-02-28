import React from 'react';
import ViewTable from './ViewTable';
import NewDataForm from './NewDataForm';

import ModalWindow from './ModalWindow';

const App = () => (
  <div className="App container-fluid">
    <div className="row">
      <div className="col">
        <ModalWindow />
        <ViewTable />
      </div>
      <div className="col">
        <NewDataForm />
      </div>
    </div>
  </div>
);

export default App;
