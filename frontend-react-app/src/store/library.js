const LOAD_SONG_LIBRARY = "library/loadSongLibrary";
const LOAD_ARTIST_LIBRARY = "library/loadArtistLibrary";

// ----------------------------------------
export const loadSongLibrary = (library) => {
  return {
    type: LOAD_SONG_LIBRARY,
    library,
  };
};

// ----------------------------------------
export const loadArtistLibrary = (library) => {
  return {
    type: LOAD_ARTIST_LIBRARY,
    library,
  };
};

// ----------------------------------------

export const getLibrary = (libraryId) => async (dispatch) => {
  const response = await fetch(`/api/library/${libraryId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadSongLibrary(data));
    return data;
  }
};

// ----------------------------------------

export const searchAllSongs = (nameOfSong) => async (dispatch) => {
  const songResponse = await fetch(`/api/search/songs/${nameOfSong}`);
  const artistResponse = await fetch(`/api/search/artists/${nameOfSong}`);

  if (songResponse.ok || artistResponse.ok) {
    const songData = await songResponse.json();
    const artistData = await artistResponse.json();
    dispatch(loadSongLibrary(songData));
    dispatch(loadArtistLibrary(artistData));
    // return data;
  }
};

// ----------------------------------------

// export const searchAllArtists = (nameOfArtist) => async(dispatch) => {
//   const response = await fetch(`/api/search/artist/${nameOfArtist}`)
//   console.log(response);

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(loadLibrary(data));
//     return data;
//   }
// }

// ----------------------------------------

const initialState = { library: {} };

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SONG_LIBRARY: {
      const newState = {
        ...state,
        library: action.library,
      };
      return newState;
    }
    case LOAD_ARTIST_LIBRARY: {
      const newState = {
        ...state,
        artistLibrary: action.library,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default libraryReducer;
