const LOAD_LIBRARY = "library/loadLibrary";
const LOAD_ITEM_LIBRARY = "library/loadItemLibrary";
const LOAD_PLAYLIST_LIBRARY = "library/loadPlaylistLibrary";

// ----------------------------------------
export const loadLibrary = (library) => {
  return {
    type: LOAD_LIBRARY,
    library,
  };
};

// ----------------------------------------
export const loadItemLibrary = (library) => {
  return {
    type: LOAD_ITEM_LIBRARY,
    library,
  };
};

export const loadPlaylistLibrary = (library) => {
  return {
    type: LOAD_PLAYLIST_LIBRARY,
    library,
  };
};

// ----------------------------------------

export const getLibrary = (libraryId) => async (dispatch) => {
  const response = await fetch(`/api/library/${libraryId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadLibrary(data));
    return data;
  }
};

// ----------------------------------------

export const searchAllItems = (nameOfItem) => async (dispatch) => {
  if (nameOfItem) {
    const response = await fetch(`/api/search/${nameOfItem}`);

    if (response.ok) {
      const data = await response.json();
      dispatch(loadItemLibrary(data));
      return data;
    }
  }
};

// ----------------------------------------

export const getRandomPlaylists = () => async (dispatch) => {
  const response = await fetch(`/api/search/random_playlists`);
  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylistLibrary(data));
    return data;
  }
};

// ----------------------------------------

const initialState = { library: {}, itemLibrary: {} };

const libraryReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_LIBRARY: {
      newState = { ...state };
      newState.library = action.library;
      return newState;
    }
    case LOAD_ITEM_LIBRARY: {
      newState = { ...state };
      newState.itemLibrary = action.library;
      return newState;
    }
    case LOAD_PLAYLIST_LIBRARY: {
      newState = { ...state };
      newState.itemLibrary = action.library;
      return newState;
    }
    default:
      return state;
  }
};

export default libraryReducer;
