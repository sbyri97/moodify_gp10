
const GET_SONGS = 'search/GETSONGS'

const searchSongs = (songs) => {
    return {
        type: GET_SONGS,
        songs
    }
}

export const searchAllSongs = (nameOfSong) => async(dispatch) => {
    const response = await fetch(`/api/search/${nameOfSong}`)
    
}



export default function searchSongReducer(state, action) {
    switch(action.type) {

    }
}  
