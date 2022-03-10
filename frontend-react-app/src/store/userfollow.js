const LOAD_USER_INFO = "user/loadUserInfo";
const FOLLOW_USER = "user/followUser";

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

export const loadUserInfo = (user) => {
  return {
    type: LOAD_USER_INFO,
    user,
  };
};
export const followUser = (user) => {
  return {
    type: FOLLOW_USER,
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

export const createFollow = (followId, sessionId) => async (dispatch) => {
  const response = await fetch(`/api/users/${Number(followId)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      followed_id: followId,
      follower_id: sessionId,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(followUser(data));
  }
  return response;
};

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

const initialState = { userInfo: {}, userFollows: {} };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_INFO: {
      const newState = { ...state };
      newState.userInfo = action.user;
      return newState;
    }
    case FOLLOW_USER: {
      const newState = { ...state };
      newState.userFollows = action.user;
      return newState;
    }
    default:
      return state;
  }
};

export default userReducer;
