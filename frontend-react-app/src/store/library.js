const LOAD_LIBRARY = "library/loadLibrary";

// ----------------------------------------
export const loadLibrary = (library) => {
  return {
    type: LOAD_LIBRARY,
    library,
  };
};

// ----------------------------------------

export const getLibrary = (libraryId) => async (dispatch) => {
  const response = await fetch(`/api/library/${libraryId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadLibrary(data.library));
    return data;
  }
};

// ----------------------------------------

const initialState = { library: {} };
const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIBRARY: {
      const library = {};
      // # TO DO: FINISH REDUCER
    }
    default:
      return state;
  }
};

export default libraryReducer;
