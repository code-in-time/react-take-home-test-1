import React, { Component } from 'react';
import PropTypes from 'prop-types';
let  Profile = require('./data/sensor_readings.json');
// import axios from 'axios';

debugger

// axios.get('./data/sensor_readings.json')
//   .then(res => console.log(res));

class App extends Component {

  state = {
    data: 'test'
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
