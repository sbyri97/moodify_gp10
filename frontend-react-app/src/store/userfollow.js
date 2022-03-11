const LOAD_USER_INFO = "user/loadUserInfo";
const LOAD_FOLLOWERS = "user/loadFollowers";

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

export const loadUserInfo = (user) => {
  return {
    type: LOAD_USER_INFO,
    user,
  };
};
export const loadFollowers = (user) => {
  return {
    type: LOAD_FOLLOWERS,
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
    dispatch(loadFollowers(data));
  }
  return response;
};

export const deleteFollow = (followId) => async (dispatch) => {
  const response = await fetch(`/api/users/${Number(followId)}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(loadFollowers(data));
  }
  return response;
};

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

const initialState = { profileInfo: {}, followers: {}, following: {} };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_INFO: {
      const newState = { ...state };
      newState.profileInfo = {
        userInfo: action.user.userInfo,
        userPlaylists: action.user.userPlaylists,
      };
      newState.followers = action.user.userFollowers;
      newState.following = action.user.userFollows;
      return newState;
    }
    case LOAD_FOLLOWERS: {
      const newState = { ...state };
      newState.following = action.user.userFollows;
      return newState;
    }
    default:
      return state;
  }
};

export default userReducer;
