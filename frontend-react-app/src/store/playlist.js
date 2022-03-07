
const LOAD_PLAYLISTS = 'playlists/loadPlaylists';


// ---------------------------------------

export const loadPlaylists = (playlists) => {
    return {
        type: LOAD_PLAYLISTS,
        playlists,
    }
}


// ---------------------------------------

export const getPlaylists = () => async(dispatch) => {
    const response = await fetch('/api/playlists')

    if (response.ok) {
        const data = await response.json();
        dispatch(loadPlaylists(data.playlists))
    }
    return response;
}







// ---------------------------------------
const initialState = { spots: {}, resorts: {} };
const spotReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_PLAYLISTS: {
            const playlists = {}
            action.playlists.forEach(playlist => {playlists[playlist.id] = playlist})
            return {...state, playlists}
        }
    }
}
