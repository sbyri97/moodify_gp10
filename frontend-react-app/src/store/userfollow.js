const LOAD_USER_INFO = "user/loadUserInfo";

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

export const loadUserInfo = (user) => {
  return {
    type: LOAD_USER_INFO,
    user,
  };
};

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

export const getUserInfo = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadUserInfo(data));
  }
  return response;
};

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

const initialState = { userInfo: {} };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_INFO: {
      const newState = { ...state };
      newState.userInfo = action.user;
      return newState;
    }
    default:
      return state;
  }
};

export default userReducer;
