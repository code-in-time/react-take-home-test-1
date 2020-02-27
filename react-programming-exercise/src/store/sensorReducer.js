const initialState = 'VISIBILITY_FILTERS.ALL';

const sensorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default sensorReducer;
