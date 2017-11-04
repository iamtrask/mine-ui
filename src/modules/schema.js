// Dummy schema we use as stubs until mine.js has this fully implemented
import DUMMY_SCHEMA from './dummy/schema';

export const GET_GENERAL_SCHEMA = 'model/GET_GENERAL_SCHEMA';

const initialState = {
  generalSchema: {} // The user's general schema
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GENERAL_SCHEMA:
      return {
        ...state,
        generalSchema: action.schema
      };

    default:
      return state;
  }
};

// Gets the user's general schema
export const getGeneralSchema = () => {
  // TODO: Replace DUMMY_SCHEMA with an actual fetch to mine.js

  return dispatch => {
    dispatch({
      type: GET_GENERAL_SCHEMA,
      schema: DUMMY_SCHEMA
    });
  };
};
