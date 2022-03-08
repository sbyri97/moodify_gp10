const LOAD_LIBRARY = "library/loadLibrary";
const LOAD_SONG_LIBRARY = "library/loadSongLibrary";
const LOAD_ARTIST_LIBRARY = "library/loadArtistLibrary";
// const LOAD_ALBUM_LIBRARY = "library/loadAlbumLibrary";


// ----------------------------------------
export const loadLibrary = (library) => {
  return {
    type: LOAD_LIBRARY,
    library,
  };
};

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
// export const loadAlbumLibrary = (library) => {
//   return {
//     type: LOAD_ALBUM_LIBRARY,
//     library,
//   };
// };

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

export const searchAllSongs = (nameOfItem) => async(dispatch) => {
  const songResponse = await fetch(`/api/search/songs/${nameOfItem}`)
  const artistResponse = await fetch(`/api/search/artists/${nameOfItem}`)
  // const albumResponse = await fetch(`/api/search/albums/${nameOfItem}`)

  // || albumResponse.ok
  if (songResponse.ok || artistResponse.ok) {
    const songData = await songResponse.json();
    const artistData = await artistResponse.json()
    // const albumData = await albumResponse.json()
    dispatch(loadSongLibrary(songData));
    dispatch(loadArtistLibrary(artistData));
    // dispatch(loadAlbumLibrary(albumData));
    // return data;
  }

}

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
// albumLibrary: {}
const initialState = { library: {}, artistLibrary: {} };

const libraryReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_LIBRARY: {
      newState = {...state};
      newState.library = action.library
      return newState;
    }
    case LOAD_SONG_LIBRARY: {
      newState = {...state};
      newState.library = action.library
      return newState;
    }
    case LOAD_ARTIST_LIBRARY: {
      newState = {...state};
      newState.artistLibrary = action.library
      return newState;
    }
    // case LOAD_ALBUM_LIBRARY: {
    //   newState = {...state};
    //   newState.albumLibrary = action.library
    //   return newState;
    // }
    default:
      return state;
  }
};

export default libraryReducer;
