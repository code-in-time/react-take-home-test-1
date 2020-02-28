import sensor_readings from '../data/sensor_readings';
import {cloneDeep} from 'lodash';

// Actions
export const ACTION_SENSORREDUCER_SAVE_ROW = 'ACTION_SENSORREDUCER_SAVE_ROW'

// Reducer
const initialState = {
  data: cloneDeep(sensor_readings)
};

export default (state = initialState, action) => {
  let stateObj = null;
  switch (action.type) {
    case ACTION_SENSORREDUCER_SAVE_ROW: {
      // Always clone state so that it does not mutate the state in the past
      stateObj = cloneDeep(state)
      stateObj.data.push(action.payload.data)
      console.log(stateObj)
      return stateObj;
    }
    default: {
      return state;
    }
  }
};

// Action creator
export const actionSensorReducerSaveRow  = data => {
  return {
    type: ACTION_SENSORREDUCER_SAVE_ROW, 
    payload: {data}
  };
}
