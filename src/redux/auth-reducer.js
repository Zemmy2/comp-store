const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

export const setAuthUserData = payload => ({
  type: SET_AUTH_USER_DATA,
  payload,
});
