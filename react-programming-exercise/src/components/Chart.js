import React from 'react';
import { connect } from "react-redux";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
// http://recharts.org/en-US/examples

const Chart = ({data}) => {
  return (
    <div className="Chart">
      <LineChart
        width={500}
        height={600}
        data={data.slice(Math.max(data.length - 500, 0))}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="reading" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.sensorReducer.data
});

export default connect(mapStateToProps)(Chart);
