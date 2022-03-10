const LOAD_PLAYLIST_INFO = "playlists/loadPlaylist";
const LOAD_PLAYLISTS = "playlists/loadPlaylists";
const LOAD_USER_PLAYLISTS = "playlists/loadUserPlaylists";
// const DELETE_PLAYLIST = "playlists/deletePlaylist";
// const LOAD_CENTER_PLAYLISTS = 'playlists/loadCenterPlaylists';
// ---------------------------------------

export const loadPlaylistInfo = (playlist) => {
  return {
    type: LOAD_PLAYLIST_INFO,
    playlist,
  };
};

export const loadPlaylists = (playlists) => {
  return {
    type: LOAD_PLAYLISTS,
    playlists,
  };
};

export const loadUserPlaylists = (playlists) => {
  return {
    type: LOAD_USER_PLAYLISTS,
    playlists
  }
}

// export const loadCenterPlaylists = (playlists) => {
//   return {
//     type: LOAD_CENTER_PLAYLISTS,
//     playlists
//   }
// }

// export const deletePlaylist = (playlistId) => {
//   return {
//     type: DELETE_PLAYLIST,
//     playlistId
//   }
// }

// ---------------------------------------


export const getArtistSongs = (artistName) => async (dispatch) => {
  const response = await fetch(`/api/artists/${artistName}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylistInfo(data));
  }
  return response;
};

export const getAlbumSongs = (albumName) => async (dispatch) => {
  const response = await fetch(`/api/albums/${albumName}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPlaylistInfo(data));
  }
  return response;
};

export const getPlaylistInfo = (playlistId) => async(dispatch) => {
    const response = await fetch(`/api/playlists/${playlistId}`)

    if (response.ok) {
        const data = await response.json();
        console.log('here------', data)
        dispatch(loadPlaylistInfo(data))
    }
    return response;
}

export const getPlaylists = (userId) => async(dispatch) => {
    const response = await fetch(`/api/playlists/users/${userId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(loadUserPlaylists(data))
    }
    return response;
}

export const createPlaylist = ({name, mood_id, user_id}) => async(dispatch) => {
    const response = await fetch('/api/playlists/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            mood_id,
            user_id
        })
    })

    const updatedResponse = await fetch(`/api/playlists/users/${user_id}`)

    if(response.ok) {
      const data = await response.json()
      const updatedData = await updatedResponse.json()
      dispatch(loadUserPlaylists(updatedData))
      return data
    }
}

export const editPlaylist = (playlist) => async(dispatch) => {
  const response = await fetch(`/api/playlists/${playlist.playlistId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          name:  playlist.name,
          mood_id: playlist.mood_id,
          user_id: playlist.user_id
      })
    })

    const updatedResponse = await fetch(`/api/playlists/users/${playlist.user_id}`)

    if(response.ok) {
      const data = await response.json()
      const updatedData = await updatedResponse.json()
      console.log('edit data', data)
      console.log('updated data', updatedData)
      // dispatch(loadPlaylist(data))
      dispatch(loadPlaylistInfo(data))
      dispatch(loadUserPlaylists(updatedData))
      // return data
    }
}


export const addSongToPlaylistFromSearch = (playlistId, songId) => async(dispatch) => {
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
      dispatch(loadPlaylistInfo(data))
  }

  return response;
}

export const deletePlaylistThunk = (playlistId) => async (dispatch) => {
  const response = await fetch (`/api/playlists/${playlistId}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    // dispatch(deletePlaylist(playlistId))
  }
}

// ---------------------------------------
const initialState = { playlists: {}, userPlaylists: {} };
// const initialState = { playlists: {} }
const playlistReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_PLAYLIST_INFO: {
      newState = {...state}
      newState.playlists = action.playlist
      return newState
    }
    //   const playlists = {
    //     ...state.playlists,
    //     ["playlist_info"]: action.playlist,
    //   };
    //   return { ...state, playlists };
    // }
     case LOAD_PLAYLISTS: {
       const playlists = {}
       action.playlists.forEach(playlist => {playlists[playlist.name] = playlist})
       return {...state, playlists}
      }
      case LOAD_USER_PLAYLISTS: {
        newState = {...state}
        newState.userPlaylists = action.playlists
        return newState;
      }
      // case LOAD_CENTER_PLAYLISTS: {
      //   newState = {...state}
      //   newState.playlists = action.playlists
      //   return newState;
      // }
      // case DELETE_PLAYLIST: {
      //   const playlists = {}
      //   delete playlists[action.playlistId]
      //   return {...state, playlists}
      // }
      default:
        return state
  }
};

export default playlistReducer;
