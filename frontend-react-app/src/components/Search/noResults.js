import React from "react";
import { useSelector} from 'react-redux'
import '../Playlist/Playlist.css'
import './search.css'


export default function NoResultsSearch({results}) {

    const users = useSelector((state) => state.library.itemLibrary?.users)
    const albums = useSelector((state) => state.library.itemLibrary?.albums)
    const songs = useSelector((state) => state.library.itemLibrary?.songs)
    const artists = useSelector((state) => state.library.itemLibrary?.artists)


    return (
        <div>
            {(results) ? null :
                ((!songs?.length) && (!artists?.length) && (!albums?.length) && (!users?.length)) ?
                <div>
                    <h2>No Results Found</h2>
                </div>
                : null
            }
        </div>
    )
}
