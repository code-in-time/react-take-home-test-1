import sensor_readings from '../data/sensor_readings';
import {cloneDeep} from 'lodash';

// Actions
export const ACTION_SENSORREDUCER_SAVE_ROW = 'ACTION_SENSORREDUCER_SAVE_ROW'

// Reducer
const initialState = {
  data: cloneDeep(sensor_readings)
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SENSORREDUCER_SAVE_ROW: {
      // Always clone state so that it does not mutate the state in the past
      const state = cloneDeep(state)

      // TODO: add the new data row
      console.log('ssssssss')
      debugger
      return state;
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
