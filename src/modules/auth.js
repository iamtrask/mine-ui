export const AUTHENICATE = 'auth/AUTHENICATE';
export const LOGOUT = 'auth/LOGOUT';

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENICATE:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };

    default:
      return state;
  }
};

export const authenticateUser = () => {
  return dispatch => {
    return setTimeout(() => {
      dispatch({
        type: AUTHENICATE
      });
    }, 3000);
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT
    });
  };
};
