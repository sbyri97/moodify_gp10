
const LOAD_PLAYLIST = 'playlists/loadPlaylist';
const LOAD_PLAYLISTS = 'playlists/loadPlaylists';


// ---------------------------------------

export const loadPlaylist = (playlist) => {
    return {
        type: LOAD_PLAYLIST,
        playlist,
    }
}


export const loadPlaylists = (playlists) => {
    return {
        type: LOAD_PLAYLISTS,
        playlists,
    }
}


// ---------------------------------------

export const getPlaylist = (id) => async(dispatch) => {
    const response = await fetch(`/api/playlists/${id}`)
    console.log(response)

    if (response.ok) {
        const data = await response.json();
        dispatch(loadPlaylist(data.playlist))
    }
    return response;
}

export const getPlaylists = () => async(dispatch) => {
    const response = await fetch('/api/playlists')

    if (response.ok) {
        const data = await response.json();
        dispatch(loadPlaylists(data.playlists))
    }
    return response;
}



// ---------------------------------------
const initialState = { playlists: {} };
const playlistReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_PLAYLIST: {
            const playlists = { ...state.playlists, [action.playlist.id]: action.playlist}
            return {...state, playlists}
        }
        case LOAD_PLAYLISTS: {
            const playlists = {}
            action.playlists.forEach(playlist => {playlists[playlist.id] = playlist})
            return {...state, playlists}
        }
        default:
            return state
    }
}

export default playlistReducer;
