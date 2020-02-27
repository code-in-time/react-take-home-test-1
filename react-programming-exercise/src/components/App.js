import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ViewTable from './ViewTable';
import NewDataForm from './NewDataForm';
import {cloneDeep} from 'lodash';

class App extends Component {

  state = {
    data: {}
  }

  addNewData = (props) => {
    debugger
    const x = props;
    const {id, box_id, sensor_type,range_l, range_u, longitude, latitude, reading, unit, reading_ts} = props;
    // Clone the state data so that the base state is not mutated

    const dataObj = cloneDeep(this.state.data);
    // Add  the new data
    // TODO: Add validation
    dataObj.push({
      id, box_id,
      sensor_type,range_l,
      range_u,
      longitude,
      latitude,
      reading,
      unit,
      reading_ts
    })
    // Update the state
    this.setState(dataObj)
  }

  render() {
    return (
      <div>
        <ViewTable />
        <div>___________________________________________________________</div>
        <NewDataForm addNewData={this.addNewData.bind(this)} />
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
