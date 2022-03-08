const LOAD_PLAYLIST = "playlists/loadPlaylist";
const LOAD_PLAYLISTS = "playlists/loadPlaylists";

// ---------------------------------------

export const loadPlaylist = (playlist) => {
  return {
    type: LOAD_PLAYLIST,
    playlist,
  };
};

export const loadPlaylists = (playlists) => {
  return {
    type: LOAD_PLAYLISTS,
    playlists,
  };
};

// ---------------------------------------

export const getPlaylist = (playlistId) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${playlistId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylist(data));
  }
  return response;
};

export const getPlaylists = () => async (dispatch) => {
  const response = await fetch("/playlists");

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylists(data.playlists));
  }
  return response;
};

export const getArtistSongs = (artistName) => async (dispatch) => {
  const response = await fetch(`/api/artists/${artistName}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylist(data));
  }
  return response;
};

export const getAlbumSongs = (albumName) => async (dispatch) => {
  const response = await fetch(`/api/albums/${albumName}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylist(data));
  }
  return response;
};

// ---------------------------------------
const initialState = { playlists: {} };
const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PLAYLIST: {
      const playlists = {
        ...state.playlists,
        ["playlist_info"]: action.playlist,
      };
      return { ...state, playlists };
    }
    case LOAD_PLAYLISTS: {
      const playlists = {};
      action.playlists.forEach((playlist) => {
        playlists[playlist.id] = playlist;
      });
      return { ...state, playlists };
    }
    default:
      return state;
  }
};

export default playlistReducer;
