const LOAD_PLAYLIST = "playlists/loadPlaylist";
const LOAD_PLAYLISTS = "playlists/loadPlaylists";
const LOAD_MOOD_PLAYLISTS = "playlists/loadMoodPlaylists";
const LOAD_USER_PLAYLISTS = "playlists/loadUserPlaylists";
const DELETE_PLAYLIST = "playlists/deletePlaylist";
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

export const loadUserPlaylists = (playlists) => {
  return {
    type: LOAD_USER_PLAYLISTS,
    playlists
  }
}

export const deletePlaylist = (playlistId) => {
  return {
    type: DELETE_PLAYLIST,
    playlistId
  }
}

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
  const response = await fetch(`/api/playlists/${playlistId}`)

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylist(data))
  }
  return response;
}

export const getPlaylists = () => async (dispatch) => {
  const response = await fetch('/api/playlists')

  if (response.ok) {
    const data = await response.json();
    dispatch(loadUserPlaylists(data.playlists))
    dispatch(loadPlaylists(data.playlists))
  }
  return response;
}

export const createPlaylist = ({ name, mood_id, user_id }) => async (dispatch) => {
  const response = await fetch('/api/playlists/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      mood_id,
      user_id
    })
  })

  const data = await response.json();
  dispatch(loadUserPlaylists([data]))
  dispatch(loadPlaylists([data]))
  return data

}

export const editPlaylist = (playlist) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${playlist.playlistId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: playlist.name,
      mood_id: playlist.mood_id,
      user_id: playlist.user_id
    })
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(loadPlaylist(data))
    dispatch(loadUserPlaylists([data]))
    return data
  }
}


export const addSongToPlaylistFromSearch = (playlistId, songId) => async (dispatch) => {
  const response = await fetch('/api/playlists/addSongsToPlaylist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      playlistId,
      songId
    })
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylist(data))
  }

  return response;
}

export const deleteSongFromPlaylist = (playlistId, songId) => async (dispatch) => {
  const response = await fetch('/api/playlists/deleteSongFromPlaylist', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      playlistId,
      songId
    })
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylist(data))
  }

  return response;
}

export const deletePlaylistThunk = (playlistId) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${playlistId}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    dispatch(deletePlaylist(playlistId))
  }
}

export const getMoodPlaylists = (id) => async (dispatch) => {
  const response = await fetch(`/api/moods/${id}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadMoodPlaylists(data));
  }
  return response;
};

// ---------------------------------------

const initialState = { playlists: {}, userPlaylists: {}, mood: {} };
const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PLAYLIST: {
      const playlists = {
        ...state.playlists,
        [action.playlist.id]: action.playlist,
      };
      return { ...state, playlists };
    }
    case LOAD_PLAYLISTS: {
      const playlists = { ...state.playlists }
      action.playlists.forEach(playlist => { playlists[playlist.id] = playlist })
      return { ...state, playlists }
    }
    case LOAD_MOOD_PLAYLISTS: {
      const newState = { ...state };
      newState.mood = action.playlists;
      return newState;
    }
    case LOAD_USER_PLAYLISTS: {
      const userPlaylists = { ...state.userPlaylists }
      action.playlists.forEach(playlist => { userPlaylists[playlist.id] = playlist })
      return { ...state, userPlaylists };
    }
    case DELETE_PLAYLIST: {
      const playlists = { ...state.playlists }
      delete playlists[action.playlistId]
      const userPlaylists = { ...state.userPlaylists }
      delete userPlaylists[action.playlistId]
      return { ...state, playlists, userPlaylists }
    }
    default:
      return state
  }
};

export default playlistReducer;
