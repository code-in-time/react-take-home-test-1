import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sensor_readings from './data/sensor_readings';
import ViewTable from './ViewTable';
import NewDataForm from './NewDataForm';

class App extends Component {

  state = {
    data: sensor_readings
  }

  render() {
    return (
      <div>
        <ViewTable data={this.state.data} />
        <NewDataForm />
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
