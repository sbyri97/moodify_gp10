const LOAD_PLAYLIST = "playlists/loadPlaylist";
const LOAD_PLAYLISTS = "playlists/loadPlaylists";
const LOAD_MOOD_PLAYLISTS = "playlists/loadMoodPlaylists";

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

export const loadMoodPlaylists = (playlists) => {
  return {
    type: LOAD_MOOD_PLAYLISTS,
    playlists,
  };
};

// ---------------------------------------

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

export const getPlaylist = (playlistId) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${playlistId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylist(data));
  }
  return response;
};

export const getPlaylists = () => async (dispatch) => {
  const response = await fetch("/api/playlists");

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylists(data.playlists));
  }
  return response;
};

export const getMoodPlaylists = (id) => async (dispatch) => {
  const response = await fetch(`/api/moods/${id}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadMoodPlaylists(data.playlists));
  }
  return response;
};

export const createPlaylist =
  ({ name, mood_id, user_id }) =>
  async (dispatch) => {
    const response = await fetch("/api/playlists/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        mood_id,
        user_id,
      }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      dispatch(loadPlaylist(data.playlists));
      return data.playlists;
    }
  };

// ---------------------------------------
const initialState = { playlists: {}, mood: {} };
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
        playlists[playlist.name] = playlist;
      });
      return { ...state, playlists };
    }
    case LOAD_MOOD_PLAYLISTS: {
      const newState = { ...state };
      newState.mood = action.playlists;
      return newState;
    }
    default:
      return state;
  }
};

export default playlistReducer;
