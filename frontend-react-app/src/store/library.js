const LOAD_LIBRARY = "library/loadLibrary";
const LOAD_ITEM_LIBRARY = "library/loadItemLibrary"


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

export const searchAllItems = (nameOfItem) => async(dispatch) => {
  
  const response = await fetch(`/api/search/${nameOfItem}`)
  
  if (response.ok) {
    const data = await response.json();
    dispatch(loadItemLibrary(data));
    return data;
  }

}


// ----------------------------------------

const initialState = { library: {}};

const libraryReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_LIBRARY: {
      newState = {...state};
      newState.library = action.library
      return newState;
    }
      case LOAD_ITEM_LIBRARY: {
      newState = {...state};
      newState.library = action.library
      return newState;
    }
    default:
      return state;
  }
};

export default libraryReducer;
