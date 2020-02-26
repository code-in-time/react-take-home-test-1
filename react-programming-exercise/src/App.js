import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sensor_readings from './data/sensor_readings'

class App extends Component {

  state = {
    data: sensor_readings
  }

  render() {
    return (
      <div>
        test
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
