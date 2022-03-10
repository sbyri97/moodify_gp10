const LOAD_USER_INFO = "user/loadUserInfo";

// ---------------------------------------

export const loadUserInfo = (user) => {
  return {
    type: LOAD_USER_INFO,
    user,
  };
};
